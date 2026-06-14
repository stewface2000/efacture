import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  getRecommendation,
  buildUserProfile,
  type QuizAnswers,
} from "@/lib/quiz-logic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { answers, email } = body as {
      answers: QuizAnswers;
      email: string;
    };

    // Validate
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    const requiredKeys = [
      "q1-statut",
      "q2-volume",
      "q3-outils",
      "q4-clients",
      "q5-critere",
    ];
    for (const key of requiredKeys) {
      if (!answers[key as keyof QuizAnswers]) {
        return NextResponse.json(
          { error: `Réponse manquante : ${key}` },
          { status: 400 }
        );
      }
    }

    // Get recommendation
    const recommendation = getRecommendation(answers);
    const userProfile = buildUserProfile(answers);

    // Check if Solution exists, create if not
    let solution = await prisma.solution.findFirst({
      where: { name: recommendation.name },
    });

    if (!solution) {
      solution = await prisma.solution.create({
        data: {
          name: recommendation.name,
          logoUrl: recommendation.logoEmoji,
          affiliateUrl: recommendation.affiliateUrl,
          payoutDetails: "Up to €200 per conversion",
          isGoodForVol: "ALL",
          isGoodForType: "ALL",
          description: recommendation.description,
        },
      });
    }

    // Save quiz result
    const quizResult = await prisma.quizResult.create({
      data: {
        userEmail: email,
        userProfile,
        recommendedId: solution.id,
      },
    });

    // Also save as lead subscriber (ignore if duplicate)
    try {
      await prisma.leadSubscriber.create({
        data: {
          email,
          source: "QUIZ_RESULT",
        },
      });
    } catch {
      // Duplicate email — ignore
    }

    return NextResponse.json({
      resultId: quizResult.id,
      recommendation: recommendation.name,
    });
  } catch (error) {
    console.error("Quiz API error:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
