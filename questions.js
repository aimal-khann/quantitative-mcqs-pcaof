/* ==========================================================================
   PCAO-F Quantitative Reasoning — Complete 60-Question Bank
   Categories: Percentages & Rate Analysis (Q1-Q12), Sampling & Errors (Q13-Q24),
               Fractions & Multi-step (Q25-Q36), Time/Cost/Units (Q37-Q48),
               Comparative Decisions & Judgment Classification (Q49-Q60)
   ========================================================================== */

window.PCAOF_DATA = {
  "EXAM_CONFIG": {
    "title": "PCAO-F Quantitative Reasoning",
    "subtitle": "60-Question Calculator-Free Mastery Portal",
    "totalCapacity": 60,
    "durationMinutes": 120,
    "passingScore": "720 / 1000",
    "calculatorAllowed": false
  },
  "CATEGORIES": [
    {
      "id": "Percentages & Rate Analysis",
      "short": "Percentages & Rates",
      "icon": "%",
      "description": "Percentage points vs. real % change, error vs. accuracy rates, back-to-back % changes, and picking the right total.",
      "topics": [
        "Percentage Points",
        "Real % Change",
        "Back-to-Back % Shifts",
        "Picking the Right Base"
      ]
    },
    {
      "id": "Sampling & Error Analysis",
      "short": "Sampling & Errors",
      "icon": "◎",
      "description": "Estimating errors in unchecked items from a sample, policy pass/fail limits, mixed groups, and why zero sample errors isn't proof.",
      "topics": [
        "Unchecked Projections",
        "Policy Pass/Fail",
        "Split Groups",
        "Small-Sample Limits"
      ]
    },
    {
      "id": "Fractions & Multi-step Calculations",
      "short": "Fractions & Multi-step",
      "icon": "÷",
      "description": "Removing fractions step by step, finding what is left over, team workload hours, and staffing gaps.",
      "topics": [
        "Step-by-Step Removal",
        "What's Left Over",
        "Team Hours",
        "Capacity Shortfalls"
      ]
    },
    {
      "id": "Time, Cost & Efficiency",
      "short": "Time, Cost & ROI",
      "icon": "⏱",
      "description": "Yearly hours saved, paying back setup time, token billing, words-to-tokens math, and deducting human checking time.",
      "topics": [
        "Minutes to Hours",
        "Setup Payback",
        "Words & Tokens",
        "Human Check Time"
      ]
    },
    {
      "id": "Comparative Decision Scenarios",
      "short": "Comparative Decisions",
      "icon": "⚖",
      "description": "Budget pace & unpaid orders, comparing vendor plans fairly, speed vs. error-fix costs, and spotting rule-based non-math questions.",
      "topics": [
        "Budget & Caps",
        "Fair Vendor Compare",
        "Speed vs. Fix Cost",
        "×10 Rule Test"
      ]
    }
  ],
  "QUESTIONS": [
    {
      "id": 1,
      "category": "Percentages & Rate Analysis",
      "difficulty": "Easy",
      "topicFocus": "Percentages & Rates · Percentage of a total",
      "concepts": [
        "Percentage of a total (find the remainder)",
        "Calculator-Free Fractions"
      ],
      "scenario": "A compliance officer checks 800 customer feedback records before they enter an AI summarization tool. Under company privacy rules, any record containing personal identifiers must be redacted first. The check finds that 25% of the records contain personal identifiers. The rest are already clean.",
      "scenarioTable": null,
      "question": "How many records are already clean?",
      "options": {
        "A": "200 records, because 25% of the 800 records contain personal identifiers.",
        "B": "775 records, because 25 is subtracted from the 800 records.",
        "C": "600 records, because 75% of the 800 records contain no personal identifiers.",
        "D": "150 records, because 75% is applied to the 200 redacted records."
      },
      "correct": "C",
      "whyCorrect": "600 records, because 75% of the 800 records contain no personal identifiers.",
      "solutionSteps": [
        "Clean share = 100% − 25% = 75%.",
        "75% of 800 = 600 records."
      ],
      "shortcut": "25% = 1/4. So 800 ÷ 4 = 200 need redaction, and 800 − 200 = 600 are clean.",
      "distractors": {
        "A": "Gives the redacted count, an intermediate result, instead of the clean count.",
        "B": "Treats 25% as 25 records (wrong unit).",
        "D": "Applies 75% to the redacted group instead of the whole batch (wrong base).",
        "C": "Correct: 600 records, because 75% of the 800 records contain no personal identifiers."
      }
    },
    {
      "id": 2,
      "category": "Percentages & Rate Analysis",
      "difficulty": "Medium",
      "topicFocus": "Percentages & Rates · Choosing the correct percentage base",
      "concepts": [
        "Choosing the correct percentage base",
        "Calculator-Free Fractions"
      ],
      "scenario": "An analyst reviews 400 claims in an AI-generated briefing and marks each one as accept, modify or reject. Of the 400 claims, 240 are accepted, 120 are modified and 40 are rejected.",
      "scenarioTable": null,
      "question": "Of the claims that were NOT accepted, what percentage were rejected?",
      "options": {
        "A": "25%, because 40 rejected claims are compared with the 160 claims that were not accepted.",
        "B": "10%, because 40 rejected claims are compared with all 400 claims.",
        "C": "33%, because 40 rejected claims are compared with the 120 modified claims.",
        "D": "60%, because 240 of the 400 claims were accepted."
      },
      "correct": "A",
      "whyCorrect": "25%, because 40 rejected claims are compared with the 160 claims that were not accepted.",
      "solutionSteps": [
        "Claims not accepted = 120 + 40 = 160.",
        "Rejected share of that group = 40 ÷ 160 = 1/4 = 25%."
      ],
      "shortcut": "Build the group first (120 + 40 = 160). Then 40 out of 160 simplifies to 1 out of 4.",
      "distractors": {
        "B": "Uses the full 400 claims as the base instead of the \"not accepted\" group.",
        "C": "Compares rejected claims with only one part of the group (modified claims).",
        "D": "Answers a different question (the accepted share).",
        "A": "Correct: 25%, because 40 rejected claims are compared with the 160 claims that were not accepted."
      }
    },
    {
      "id": 3,
      "category": "Percentages & Rate Analysis",
      "difficulty": "Medium",
      "topicFocus": "Percentages & Rates · Percentage decrease",
      "concepts": [
        "Percentage decrease",
        "Calculator-Free Fractions"
      ],
      "scenario": "A legal operations team spent 500 hours per month reviewing vendor agreements by hand. After adding an AI clause-extraction workflow with human legal review, monthly review time fell to 400 hours.",
      "scenarioTable": null,
      "question": "What was the percentage decrease in monthly review time?",
      "options": {
        "A": "80%, because the new 400 hours is 80% of the original 500 hours.",
        "B": "25%, because the 100-hour saving is compared with the new 400-hour total.",
        "C": "100%, because the monthly saving is 100 hours.",
        "D": "20%, because the 100-hour saving is compared with the original 500 hours."
      },
      "correct": "D",
      "whyCorrect": "20%, because the 100-hour saving is compared with the original 500 hours.",
      "solutionSteps": [
        "Hours saved = 500 − 400 = 100.",
        "Percentage decrease = saving ÷ original = 100 ÷ 500 = 1/5 = 20%."
      ],
      "shortcut": "Always divide the change by the starting value. 100 ÷ 500 = 1/5, and 1/5 = 20%.",
      "distractors": {
        "A": "Reports the time remaining, not the decrease.",
        "B": "Uses the new value as the base instead of the original (wrong base).",
        "C": "Reports the 100-hour saving as a percentage (wrong unit).",
        "D": "Correct: 20%, because the 100-hour saving is compared with the original 500 hours."
      }
    },
    {
      "id": 4,
      "category": "Percentages & Rate Analysis",
      "difficulty": "Hard",
      "topicFocus": "Percentages & Rates · Sequential percentage changes",
      "concepts": [
        "Sequential percentage changes",
        "Calculator-Free Fractions"
      ],
      "scenario": "An AI monitoring tool flags 400 transactions for compliance review in Month 1. In Month 2, after the team widens the detection thresholds, flags rise by 50%. In Month 3, after a duplicate filter is added, flags fall by 40% from the Month 2 level.",
      "scenarioTable": null,
      "question": "What was the net percentage change in flagged transactions from Month 1 to Month 3?",
      "options": {
        "A": "10% increase, because +50% and −40% leave a net gain of 10%.",
        "B": "10% decrease, because flags fell from 400 in Month 1 to 360 in Month 3.",
        "C": "40% decrease, because 40 fewer transactions were flagged than in Month 1.",
        "D": "60% decrease, because 360 is 60% of the Month 2 total of 600."
      },
      "correct": "B",
      "whyCorrect": "10% decrease, because flags fell from 400 in Month 1 to 360 in Month 3.",
      "solutionSteps": [
        "Month 2 = 400 + 50% of 400 = 400 + 200 = 600.",
        "Month 3 = 600 − 40% of 600 = 600 − 240 = 360.",
        "Net change = 360 − 400 = −40.",
        "Percentage change = −40 ÷ 400 = −10%, a 10% decrease."
      ],
      "shortcut": "Multiply the factors: 1.5 × 0.6 = 0.9. Ending at 0.9 of the start means a 10% decrease.",
      "distractors": {
        "A": "Adds and subtracts the percentages directly, ignoring that the base changes each month.",
        "C": "Treats the 40-transaction drop as 40%.",
        "D": "Reports Month 3 as a share of Month 2, not the change from Month 1.",
        "B": "Correct: 10% decrease, because flags fell from 400 in Month 1 to 360 in Month 3."
      }
    },
    {
      "id": 5,
      "category": "Percentages & Rate Analysis",
      "difficulty": "Easy",
      "topicFocus": "Percentages & Rates · Percentage-point change",
      "concepts": [
        "Percentage-point change",
        "Calculator-Free Fractions"
      ],
      "scenario": "A quality supervisor audits 500 AI-drafted support emails each month. In October, 10% contained errors. In November, after the team began writing a structured delegation brief for each task, 6% contained errors.",
      "scenarioTable": null,
      "question": "By how many percentage points did the error rate decrease?",
      "options": {
        "A": "4 percentage points, because 10% − 6% = 4%.",
        "B": "40 percentage points, because the 4-point drop is 40% of the original 10% rate.",
        "C": "20 percentage points, because there were 20 fewer errors (50 down to 30).",
        "D": "6 percentage points, because 6% is the new error rate."
      },
      "correct": "A",
      "whyCorrect": "4 percentage points, because 10% − 6% = 4%.",
      "solutionSteps": [
        "October rate = 10%. November rate = 6%.",
        "Percentage-point change = 10 − 6 = 4 percentage points."
      ],
      "shortcut": "Percentage-point change is plain subtraction of the two rates.",
      "distractors": {
        "B": "Gives the relative change (4 ÷ 10 = 40%) and calls it points.",
        "C": "Uses the raw error count difference (50 − 30 = 20) as points.",
        "D": "Reports the final rate instead of the difference.",
        "A": "Correct: 4 percentage points, because 10% − 6% = 4%."
      }
    },
    {
      "id": 6,
      "category": "Percentages & Rate Analysis",
      "difficulty": "Hard",
      "topicFocus": "Percentages & Rates · Percentage points vs. relative change",
      "concepts": [
        "Percentage points vs. relative change",
        "Calculator-Free Fractions"
      ],
      "scenario": "An evaluation team tests a triage agent on 1,000 records in each of two cycles. Accuracy is 80% in Cycle 1. After the team rewrites its prompts, accuracy is 92% in Cycle 2.",
      "scenarioTable": null,
      "question": "Which option correctly gives BOTH the percentage-point increase and the relative (percentage) increase in accuracy?",
      "options": {
        "A": "12 percentage points and 12%, because both measures are always equal.",
        "B": "15 percentage points and 12%, because the two results are assigned to the wrong measures.",
        "C": "12 percentage points and 15%, because 92 − 80 = 12 and 12 ÷ 80 = 15%.",
        "D": "12 percentage points and 92%, because the new accuracy is 92%."
      },
      "correct": "C",
      "whyCorrect": "12 percentage points and 15%, because 92 − 80 = 12 and 12 ÷ 80 = 15%.",
      "solutionSteps": [
        "Percentage-point increase = 92% − 80% = 12 points.",
        "Relative increase = 12 ÷ 80 = 3/20 = 15%."
      ],
      "shortcut": "Simplify 12/80 by dividing both numbers by 4 to get 3/20. Since 1/20 = 5%, 3/20 = 15%.",
      "distractors": {
        "A": "Assumes points and relative change are the same number.",
        "B": "Swaps the two correct values between the two measures.",
        "D": "Uses the final accuracy as the relative increase.",
        "C": "Correct: 12 percentage points and 15%, because 92 − 80 = 12 and 12 ÷ 80 = 15%."
      }
    },
    {
      "id": 7,
      "category": "Percentages & Rate Analysis",
      "difficulty": "Medium",
      "topicFocus": "Percentages & Rates · Error rate vs. accuracy rate",
      "concepts": [
        "Error rate vs. accuracy rate",
        "Calculator-Free Fractions"
      ],
      "scenario": "A team tests an AI-assisted extraction tool on 200 invoices whose correct line items are already known. The tool extracts 150 invoices correctly and makes at least one mistake on the rest.",
      "scenarioTable": null,
      "question": "What is the tool's error rate?",
      "options": {
        "A": "75%, because 150 of the 200 invoices were extracted correctly.",
        "B": "50%, because 50 invoices contained mistakes.",
        "C": "33%, because 50 mistakes are compared with the 150 correct invoices.",
        "D": "25%, because 50 of the 200 invoices contained mistakes."
      },
      "correct": "D",
      "whyCorrect": "25%, because 50 of the 200 invoices contained mistakes.",
      "solutionSteps": [
        "Invoices with mistakes = 200 − 150 = 50.",
        "Error rate = 50 ÷ 200 = 1/4 = 25%."
      ],
      "shortcut": "50 out of 200 is the same as 1 out of 4, which is 25%.",
      "distractors": {
        "A": "Gives the accuracy rate instead of the error rate.",
        "B": "Treats the count of 50 as 50%.",
        "C": "Divides errors by the correct invoices instead of the total (wrong base).",
        "D": "Correct: 25%, because 50 of the 200 invoices contained mistakes."
      }
    },
    {
      "id": 8,
      "category": "Percentages & Rate Analysis",
      "difficulty": "Medium",
      "topicFocus": "Percentages & Rates · Accuracy rate against a threshold",
      "concepts": [
        "Accuracy rate against a threshold",
        "Calculator-Free Fractions"
      ],
      "scenario": "A team checks 500 AI-written summaries for fabricated facts or citations and finds problems in 40 of them. Company policy allows a batch to be published only if its accuracy rate is at least 90%.",
      "scenarioTable": null,
      "question": "What is the batch's accuracy rate, and may it be published?",
      "options": {
        "A": "8%, and it fails, because 8% is far below the required 90%.",
        "B": "92%, and it passes, because 460 of the 500 summaries are accurate.",
        "C": "92%, and it fails, because a 90% standard allows only 10 problem summaries.",
        "D": "46%, and it fails, because 460 accurate summaries are measured against 1,000."
      },
      "correct": "B",
      "whyCorrect": "92%, and it passes, because 460 of the 500 summaries are accurate.",
      "solutionSteps": [
        "Accurate summaries = 500 − 40 = 460.",
        "Accuracy rate = 460 ÷ 500 = 92%.",
        "92% is at least 90%, so the batch may be published."
      ],
      "shortcut": "40 ÷ 500 = 8 ÷ 100 = 8% errors, so accuracy is 100% − 8% = 92%. Check: 10% of 500 = 50 allowed problems, and 40 is under 50.",
      "distractors": {
        "A": "Reports the error rate and treats it as accuracy.",
        "C": "Reads \"10% allowed\" as \"10 summaries allowed\" (wrong unit).",
        "D": "Uses the wrong total (1,000) as the base.",
        "B": "Correct: 92%, and it passes, because 460 of the 500 summaries are accurate."
      }
    },
    {
      "id": 9,
      "category": "Percentages & Rate Analysis",
      "difficulty": "Medium",
      "topicFocus": "Percentages & Rates · Comparing rates across unequal totals",
      "concepts": [
        "Comparing rates across unequal totals",
        "Calculator-Free Fractions"
      ],
      "scenario": "A quality team audits AI-assisted customer drafts in two divisions over one month.",
      "scenarioTable": {
        "headers": [
          "Division",
          "Drafts audited",
          "Defective drafts"
        ],
        "rows": [
          [
            "Customer Support",
            "800",
            "40"
          ],
          [
            "Account Operations",
            "200",
            "20"
          ]
        ]
      },
      "question": "Which division has the lower defect rate?",
      "options": {
        "A": "Customer Support, because 40 ÷ 800 = 5% is lower than 20 ÷ 200 = 10%.",
        "B": "Account Operations, because it has fewer defective drafts (20 compared with 40).",
        "C": "Neither, because both divisions have a 6% rate (60 defects across 1,000 drafts).",
        "D": "Customer Support, with a 4% rate, because 40 defects are spread across 1,000 combined drafts."
      },
      "correct": "A",
      "whyCorrect": "Customer Support, because 40 ÷ 800 = 5% is lower than 20 ÷ 200 = 10%.",
      "solutionSteps": [
        "Customer Support = 40 ÷ 800 = 1/20 = 5%.",
        "Account Operations = 20 ÷ 200 = 1/10 = 10%.",
        "5% is lower than 10%."
      ],
      "shortcut": "Convert each to a simple fraction (1/20 and 1/10) and compare.",
      "distractors": {
        "B": "Compares raw counts even though the totals are very different.",
        "C": "Pools both divisions together and hides the real difference.",
        "D": "Divides one division's defects by the combined total (wrong base).",
        "A": "Correct: Customer Support, because 40 ÷ 800 = 5% is lower than 20 ÷ 200 = 10%."
      }
    },
    {
      "id": 10,
      "category": "Percentages & Rate Analysis",
      "difficulty": "Hard",
      "topicFocus": "Percentages & Rates · Rate comparison and a decision rule",
      "concepts": [
        "Rate comparison and a decision rule",
        "Calculator-Free Fractions"
      ],
      "scenario": "An engineering lead compares two AI model tiers on a categorization task.\n\nThe company will standardize on Tier 2 only if its error rate is at least 4 percentage points lower than Tier 1's.",
      "scenarioTable": {
        "headers": [
          "Model tier",
          "Records categorized",
          "Critical routing errors"
        ],
        "rows": [
          [
            "Tier 1 (standard)",
            "1,200",
            "60"
          ],
          [
            "Tier 2 (reasoning)",
            "400",
            "8"
          ]
        ]
      },
      "question": "Which decision is best supported by the data?",
      "options": {
        "A": "Keep Tier 1, because it processed 1,200 records, three times as many as Tier 2.",
        "B": "Move to Tier 2, because it made only 8 errors compared with 60 for Tier 1.",
        "C": "Move to Tier 2, because its error rate is 60% lower than Tier 1's, well above the 4 required.",
        "D": "Keep Tier 1, because Tier 2's 2% error rate is only 3 percentage points below Tier 1's 5%, short of the 4 required."
      },
      "correct": "D",
      "whyCorrect": "Keep Tier 1, because Tier 2's 2% error rate is only 3 percentage points below Tier 1's 5%, short of the 4 required.",
      "solutionSteps": [
        "Tier 1 error rate = 60 ÷ 1,200 = 1/20 = 5%.",
        "Tier 2 error rate = 8 ÷ 400 = 2/100 = 2%.",
        "Gap = 5% − 2% = 3 percentage points.",
        "The rule needs at least 4 points, and 3 is less than 4. Tier 2 does not qualify."
      ],
      "shortcut": "Simplify each fraction: 60/1,200 = 1/20 = 5%, and 8/400 = 1/50 = 2%. Then subtract. The rule is in percentage points, so compare points with points.",
      "distractors": {
        "A": "Judges by volume and ignores the error rates and the rule.",
        "B": "Compares raw error counts across very different totals.",
        "C": "Uses relative reduction (3 ÷ 5 = 60%) against a rule written in percentage points.",
        "D": "Correct: Keep Tier 1, because Tier 2's 2% error rate is only 3 percentage points below Tier 1's 5%, short of the 4 required."
      }
    },
    {
      "id": 11,
      "category": "Percentages & Rate Analysis",
      "difficulty": "Easy",
      "topicFocus": "Percentages & Rates · Absolute vs. relative reduction",
      "concepts": [
        "Absolute vs. relative reduction",
        "Calculator-Free Fractions"
      ],
      "scenario": "A team adds a stricter system prompt and verified reference documents to reduce hallucinations in weekly client briefing drafts. The number of flagged factual errors falls from 50 per week to 10 per week.",
      "scenarioTable": null,
      "question": "What are the absolute reduction and the relative reduction in weekly errors?",
      "options": {
        "A": "40 errors and 20%, because 10 ÷ 50 = 20%.",
        "B": "40 errors and 80%, because 40 ÷ 50 = 80%.",
        "C": "40 errors and 40%, because the same figure is used as a count and as a percentage.",
        "D": "10 errors and 20%, because both figures describe the errors that remain."
      },
      "correct": "B",
      "whyCorrect": "40 errors and 80%, because 40 ÷ 50 = 80%.",
      "solutionSteps": [
        "Absolute reduction = 50 − 10 = 40 errors.",
        "Relative reduction = 40 ÷ 50 = 80%."
      ],
      "shortcut": "40/50 = 80/100 = 80%. Double the top and bottom to reach 100.",
      "distractors": {
        "A": "Gives the share that remains (10 ÷ 50), not the share removed.",
        "C": "Reuses the count of 40 as a percentage.",
        "D": "Reports what is left, not what was removed.",
        "B": "Correct: 40 errors and 80%, because 40 ÷ 50 = 80%."
      }
    },
    {
      "id": 12,
      "category": "Percentages & Rate Analysis",
      "difficulty": "Medium",
      "topicFocus": "Percentages & Rates · Relative vs. absolute change",
      "concepts": [
        "Relative vs. absolute change",
        "Calculator-Free Fractions"
      ],
      "scenario": "An operations director compares two automated pipelines. A junior analyst says Pipeline Y improved more because it removed more manual steps.",
      "scenarioTable": {
        "headers": [
          "Pipeline",
          "Manual steps before",
          "Manual steps after"
        ],
        "rows": [
          [
            "X (vendor intake)",
            "20",
            "15"
          ],
          [
            "Y (payment reconciliation)",
            "100",
            "85"
          ]
        ]
      },
      "question": "Which pipeline achieved the larger relative reduction in manual steps?",
      "options": {
        "A": "Pipeline Y, because it removed 15 steps, three times as many as Pipeline X's 5.",
        "B": "Pipeline Y, because it keeps 85% of its steps compared with 75% for Pipeline X.",
        "C": "Pipeline X, because it cut 25% of its steps (5 ÷ 20) compared with 15% for Pipeline Y (15 ÷ 100).",
        "D": "Neither can be judged, because the pipelines start with different numbers of steps."
      },
      "correct": "C",
      "whyCorrect": "Pipeline X, because it cut 25% of its steps (5 ÷ 20) compared with 15% for Pipeline Y (15 ÷ 100).",
      "solutionSteps": [
        "Pipeline X: 20 − 15 = 5 steps removed. 5 ÷ 20 = 1/4 = 25%.",
        "Pipeline Y: 100 − 85 = 15 steps removed. 15 ÷ 100 = 15%.",
        "25% is greater than 15%, so Pipeline X has the larger relative reduction."
      ],
      "shortcut": "5/20 = 1/4 = 25%, and 15/100 = 15%. Percentages exist to compare changes from different starting sizes.",
      "distractors": {
        "A": "Uses absolute change and ignores the starting size.",
        "B": "Compares the share of steps kept, which is not the reduction.",
        "D": "Wrongly assumes different starting sizes make comparison impossible.",
        "C": "Correct: Pipeline X, because it cut 25% of its steps (5 ÷ 20) compared with 15% for Pipeline Y (15 ÷ 100)."
      }
    },
    {
      "id": 13,
      "category": "Sampling & Error Analysis",
      "difficulty": "Easy",
      "topicFocus": "Sampling & Errors · Projecting a sample error rate",
      "concepts": [
        "Projecting a sample error rate",
        "Sample Rate Projection",
        "Residual Risk"
      ],
      "scenario": "An AI tool drafted replies to 1,200 customer tickets. A lead reads a random 300 and finds 18 quoting the wrong refund amount.",
      "scenarioTable": null,
      "question": "If the same rate holds, how many wrong amounts are expected among the 900 unread replies?",
      "options": {
        "A": "18, because these are the wrong replies already found in the sample.",
        "B": "54, because the unread group is three times the sample size.",
        "C": "72, because the error rate applies to all 1,200 tickets.",
        "D": "36, because the unread group is twice the sample size."
      },
      "correct": "B",
      "whyCorrect": "54, because the unread group is three times the sample size.",
      "solutionSteps": [
        "18 ÷ 300 = 6%",
        "6% of 900 = 54."
      ],
      "shortcut": "900 ÷ 300 = 3, so 18 × 3 = 54.",
      "distractors": {
        "A": "Trap: Option A reports the sample only.",
        "C": "Trap: Option C applies the rate to everything.",
        "D": "Trap: Option D uses ×2.",
        "B": "Correct: 54, because the unread group is three times the sample size."
      }
    },
    {
      "id": 14,
      "category": "Sampling & Error Analysis",
      "difficulty": "Easy",
      "topicFocus": "Sampling & Errors · Scaling a sample up to the whole batch",
      "concepts": [
        "Scaling a sample up to the whole batch",
        "Sample Rate Projection",
        "Residual Risk"
      ],
      "scenario": "An AI assistant tags 3,000 supplier documents. An auditor checks a random 10% and finds 15 wrongly tagged.",
      "scenarioTable": null,
      "question": "If the rate holds, about how many are wrongly tagged in the whole batch?",
      "options": {
        "A": "15, because that is the number the auditor actually found.",
        "B": "135, because only the unchecked documents can still hold errors.",
        "C": "300, because checking 10% means 10% are wrong.",
        "D": "150, because the 15 errors came from one tenth of the batch."
      },
      "correct": "D",
      "whyCorrect": "150, because the 15 errors came from one tenth of the batch.",
      "solutionSteps": [
        "10% of 3,000 = 300 checked",
        "15 ÷ 300 = 5%",
        "5% of 3,000 = 150."
      ],
      "shortcut": "The sample is 1/10 of the batch, so 15 × 10 = 150.",
      "distractors": {
        "A": "Trap: Option A is the sample only.",
        "B": "Trap: Option B answers \"unchecked\", not \"total\".",
        "C": "Trap: Option C confuses the share checked with the error rate.",
        "D": "Correct: 150, because the 15 errors came from one tenth of the batch."
      }
    },
    {
      "id": 15,
      "category": "Sampling & Error Analysis",
      "difficulty": "Easy",
      "topicFocus": "Sampling & Errors · Computing the sample error rate",
      "concepts": [
        "Computing the sample error rate",
        "Sample Rate Projection",
        "Residual Risk"
      ],
      "scenario": "An AI tool coded 800 expense claims. A reviewer checked 160 and found 8 miscoded.",
      "scenarioTable": null,
      "question": "What is the sample error rate?",
      "options": {
        "A": "5%, because 8 errors out of 160 checked claims is 1 in 20.",
        "B": "1%, because 8 errors out of all 800 claims is 1 in 100.",
        "C": "20%, because 160 of the 800 claims were checked.",
        "D": "8%, because 8 errors were found in the sample."
      },
      "correct": "A",
      "whyCorrect": "5%, because 8 errors out of 160 checked claims is 1 in 20.",
      "solutionSteps": [
        "Errors ÷ items checked = 8 ÷ 160 = 5%."
      ],
      "shortcut": "160 ÷ 8 = 20, so 1 in 20 = 5%.",
      "distractors": {
        "B": "Trap: Option B divides by the total.",
        "C": "Trap: Option C is the share checked.",
        "D": "Trap: Option D turns a count into a percent.",
        "A": "Correct: 5%, because 8 errors out of 160 checked claims is 1 in 20."
      }
    },
    {
      "id": 16,
      "category": "Sampling & Error Analysis",
      "difficulty": "Easy",
      "topicFocus": "Sampling & Errors · Wrongly passed items",
      "concepts": [
        "Wrongly passed items",
        "Sample Rate Projection",
        "Residual Risk"
      ],
      "scenario": "An AI fraud checker reviews 400 transactions. It flags 100 and passes 300. A human re-check of all 400 finds 20 of the flagged ones were fine and 12 of the passed ones were fraud.",
      "scenarioTable": null,
      "question": "What share of the AI-passed transactions were wrongly passed?",
      "options": {
        "A": "3%, because 12 of all 400 transactions were wrongly handled.",
        "B": "20%, because 20 of the 100 flagged transactions were fine.",
        "C": "4%, because 12 of the 300 passed transactions were fraud.",
        "D": "25%, because 100 of the 400 transactions were flagged."
      },
      "correct": "C",
      "whyCorrect": "4%, because 12 of the 300 passed transactions were fraud.",
      "solutionSteps": [
        "Wrongly passed ÷ all passed = 12 ÷ 300 = 4%."
      ],
      "shortcut": "300 ÷ 12 = 25, so 1 in 25 = 4%.",
      "distractors": {
        "A": "Trap: Option A uses the wrong denominator.",
        "B": "Trap: Option B is the false-flag rate.",
        "D": "Trap: Option D is the flag rate.",
        "C": "Correct: 4%, because 12 of the 300 passed transactions were fraud."
      }
    },
    {
      "id": 17,
      "category": "Sampling & Error Analysis",
      "difficulty": "Medium",
      "topicFocus": "Sampling & Errors · Threshold decision",
      "concepts": [
        "Threshold decision",
        "Sample Rate Projection",
        "Residual Risk"
      ],
      "scenario": "Policy: if more than 5% of AI-drafted compliance emails contain errors, the team must switch to full human review. A reviewer reads 240 random emails from a batch of 1,200 and finds 15 with errors.",
      "scenarioTable": null,
      "question": "What should the team do?",
      "options": {
        "A": "Keep auto-sending, because 15 errors is a tiny number next to 1,200 emails.",
        "B": "Keep auto-sending, because 5% of 240 is 15, so the rate sits exactly on the limit.",
        "C": "Take a second sample first, because a single sample should never trigger a policy.",
        "D": "Switch to full human review, because 5% of 240 is 12 and 15 exceeds that."
      },
      "correct": "D",
      "whyCorrect": "Switch to full human review, because 5% of 240 is 12 and 15 exceeds that.",
      "solutionSteps": [
        "10% of 240 = 24, so 5% = 12. 15 > 12",
        "15 ÷ 240 = 6.25%, above the limit."
      ],
      "shortcut": "Compute the allowed errors (12) and compare with the found errors (15).",
      "distractors": {
        "A": "Trap: Option A judges by count, not rate.",
        "B": "Trap: Option B miscalculates 5%.",
        "C": "Trap: Option C invents a rule the policy doesn't have.",
        "D": "Correct: Switch to full human review, because 5% of 240 is 12 and 15 exceeds that."
      }
    },
    {
      "id": 18,
      "category": "Sampling & Error Analysis",
      "difficulty": "Medium",
      "topicFocus": "Sampling & Errors · Errors left after a partial check",
      "concepts": [
        "Errors left after a partial check",
        "Sample Rate Projection",
        "Residual Risk"
      ],
      "scenario": "An AI assistant entered 2,000 invoice lines. A reviewer checks a random 30% (600 lines) and finds and fixes 24 errors.",
      "scenarioTable": null,
      "question": "If the rate holds, about how many errors remain in the 1,400 unchecked lines?",
      "options": {
        "A": "24, because those are the errors the reviewer already found and fixed.",
        "B": "56, because 70% unchecked is seven tenths, and each tenth holds 8 errors.",
        "C": "80, because the 4% error rate applies to all 2,000 invoice lines.",
        "D": "72, because the unchecked lines are three times the checked lines."
      },
      "correct": "B",
      "whyCorrect": "56, because 70% unchecked is seven tenths, and each tenth holds 8 errors.",
      "solutionSteps": [
        "24 ÷ 600 = 4%",
        "4% of 1,400 = 56."
      ],
      "shortcut": "24 errors per 30% means 8 per 10%, and 7 × 8 = 56.",
      "distractors": {
        "A": "Trap: Option A counts the fixed errors.",
        "C": "Trap: Option C includes the fixed ones.",
        "D": "Trap: Option D uses ×3, but 1,400 ÷ 600 is about 2.3.",
        "B": "Correct: 56, because 70% unchecked is seven tenths, and each tenth holds 8 errors."
      }
    },
    {
      "id": 19,
      "category": "Sampling & Error Analysis",
      "difficulty": "Medium",
      "topicFocus": "Sampling & Errors · Testing a vendor's claim",
      "concepts": [
        "Testing a vendor's claim",
        "Sample Rate Projection",
        "Residual Risk"
      ],
      "scenario": "A vendor claims its AI translation tool errs in only 3% of 1,600 documents. A reviewer randomly checks 400 and finds 24 with errors.",
      "scenarioTable": null,
      "question": "What is the best conclusion?",
      "options": {
        "A": "The sample rate is 6%, double the claim, so about 96 errors are likely overall.",
        "B": "The claim holds, because 24 errors is a small number next to 1,600 documents.",
        "C": "The sample rate is 1.5%, because 24 is 1.5% of all 1,600 documents.",
        "D": "No conclusion is possible, because 400 documents is too small a share to judge."
      },
      "correct": "A",
      "whyCorrect": "The sample rate is 6%, double the claim, so about 96 errors are likely overall.",
      "solutionSteps": [
        "24 ÷ 400 = 6%. The claim implies 3% of 1,600 = 48 errors, but 6% of 1,600 = 96."
      ],
      "shortcut": "400 × 4 = 1,600, so 24 × 4 = 96, which is double 48.",
      "distractors": {
        "B": "Trap: Option B judges by count.",
        "C": "Trap: Option C uses the total as the denominator.",
        "D": "Trap: Option D wrongly treats a 25% sample as tiny.",
        "A": "Correct: The sample rate is 6%, double the claim, so about 96 errors are likely overall."
      }
    },
    {
      "id": 20,
      "category": "Sampling & Error Analysis",
      "difficulty": "Medium",
      "topicFocus": "Sampling & Errors · Combining two groups' error rates",
      "concepts": [
        "Combining two groups' error rates",
        "Sample Rate Projection",
        "Residual Risk"
      ],
      "scenario": "An AI tool extracts data from 1,000 forms: 900 typed and 100 handwritten. An auditor checks 100 typed forms (2 wrong) and 20 handwritten forms (6 wrong).",
      "scenarioTable": null,
      "question": "Using each group's own rate, how many wrong extractions are expected in the whole batch?",
      "options": {
        "A": "20, because the typed forms' 2% error rate applies to all 1,000 forms.",
        "B": "8, because 2 plus 6 errors were found in the audit samples.",
        "C": "48, because 2% of 900 typed forms plus 30% of 100 handwritten forms is 18 + 30.",
        "D": "300, because the handwritten forms' 30% error rate applies to all 1,000 forms."
      },
      "correct": "C",
      "whyCorrect": "48, because 2% of 900 typed forms plus 30% of 100 handwritten forms is 18 + 30.",
      "solutionSteps": [
        "Typed: 2 ÷ 100 = 2%",
        "handwritten: 6 ÷ 20 = 30%. 2% of 900 = 18",
        "30% of 100 = 30",
        "total = 48."
      ],
      "shortcut": "9 × 2 = 18, then 18 + 30 = 48.",
      "distractors": {
        "A": "Trap: Both A & D apply one group's rate to everything.",
        "D": "Trap: Both A & D apply one group's rate to everything.",
        "B": "Trap: Option B counts sample errors only.",
        "C": "Correct: 48, because 2% of 900 typed forms plus 30% of 100 handwritten forms is 18 + 30."
      }
    },
    {
      "id": 21,
      "category": "Sampling & Error Analysis",
      "difficulty": "Medium",
      "topicFocus": "Sampling & Errors · Choosing a sampling plan",
      "concepts": [
        "Choosing a sampling plan",
        "Sample Rate Projection",
        "Residual Risk"
      ],
      "scenario": "An AI tool processes 2,000 forms: 1,800 typed and 200 handwritten. Past audits suggest handwritten forms are where it fails. The team can check only 100 forms.",
      "scenarioTable": null,
      "question": "Which plan is most likely to reveal the problem?",
      "options": {
        "A": "Pick 100 forms at random from all 2,000, which brings in only about 10 handwritten ones.",
        "B": "Check 50 typed and 50 handwritten forms, chosen at random within each group.",
        "C": "Check the first 100 forms received, since they are quickest to pull up.",
        "D": "Check the 100 forms the AI was most sure about, since they are cleanest."
      },
      "correct": "B",
      "whyCorrect": "Check 50 typed and 50 handwritten forms, chosen at random within each group.",
      "solutionSteps": [
        "Handwritten share = 200 ÷ 2,000 = 10%, so a plain random 100 holds about 10 handwritten forms, too few to show a pattern. Sampling within each group guarantees 50."
      ],
      "shortcut": "Expected handwritten forms = 100 × 10% = 10.",
      "distractors": {
        "A": "Trap: Option A looks fair but is too thin on the weak group.",
        "C": "Trap: Option C is convenience sampling.",
        "D": "Trap: Option D skips the likely failures.",
        "B": "Correct: Check 50 typed and 50 handwritten forms, chosen at random within each group."
      }
    },
    {
      "id": 22,
      "category": "Sampling & Error Analysis",
      "difficulty": "Hard",
      "topicFocus": "Sampling & Errors · Overall rate vs weak group",
      "concepts": [
        "Overall rate vs weak group",
        "Sample Rate Projection",
        "Residual Risk"
      ],
      "scenario": "An AI tool triages 2,000 insurance claims: 1,600 routine and 400 complex. Spot checks show a 2% error rate on routine and 10% on complex. The team's rule is overall error below 4%.",
      "scenarioTable": null,
      "question": "Which conclusion is best?",
      "options": {
        "A": "Overall error is 6%, the average of 2% and 10%, so all claims need review.",
        "B": "Overall error is 3.6%, under the 4% limit, so no further action is needed.",
        "C": "Overall error is 10%, because the complex claims are the riskiest group.",
        "D": "Overall error is 3.6%, under the limit, but complex claims at 10% still need extra review."
      },
      "correct": "D",
      "whyCorrect": "Overall error is 3.6%, under the limit, but complex claims at 10% still need extra review.",
      "solutionSteps": [
        "1,600 × 2% = 32",
        "400 × 10% = 40",
        "72 ÷ 2,000 = 3.6%. The overall rate passes, but the complex group is 2.5 times the limit."
      ],
      "shortcut": "32 + 40 = 72; 72 ÷ 20 = 3.6 per 100.",
      "distractors": {
        "A": "Trap: Option A averages rates without weights.",
        "B": "Trap: Option B trusts the overall number.",
        "C": "Trap: Option C ignores the weights.",
        "D": "Correct: Overall error is 3.6%, under the limit, but complex claims at 10% still need extra review."
      }
    },
    {
      "id": 23,
      "category": "Sampling & Error Analysis",
      "difficulty": "Hard",
      "topicFocus": "Sampling & Errors · Zero errors found",
      "concepts": [
        "Zero errors found",
        "Sample Rate Projection",
        "Residual Risk"
      ],
      "scenario": "An AI assistant coded 5,000 support tickets. A reviewer checks 50 random tickets, finds no errors, and reports the batch as error-free.",
      "scenarioTable": null,
      "question": "What is the best response?",
      "options": {
        "A": "Not proven: a 4% rate would give 200 batch errors but only about 2 in the sample.",
        "B": "Accepted: finding zero errors in a random sample proves the true error rate is 0%.",
        "C": "Accepted: random samples never miss errors, so 50 tickets can stand for all 5,000.",
        "D": "Rejected: a sample with zero errors is invalid, so the reviewer must start over."
      },
      "correct": "A",
      "whyCorrect": "Not proven: a 4% rate would give 200 batch errors but only about 2 in the sample.",
      "solutionSteps": [
        "At 4%, the batch holds 4% × 5,000 = 200 errors. A 50-ticket sample expects 4% × 50 = 2, so seeing 0 is easy to get by chance."
      ],
      "shortcut": "4 per 100 means 2 per 50.",
      "distractors": {
        "B": "Trap: Both B & C treat a small clean sample as proof.",
        "C": "Trap: Both B & C treat a small clean sample as proof.",
        "D": "Trap: Option D punishes a valid result.",
        "A": "Correct: Not proven: a 4% rate would give 200 batch errors but only about 2 in the sample."
      }
    },
    {
      "id": 24,
      "category": "Sampling & Error Analysis",
      "difficulty": "Hard",
      "topicFocus": "Sampling & Errors · Sampling within a time budget",
      "concepts": [
        "Sampling within a time budget",
        "Sample Rate Projection",
        "Residual Risk"
      ],
      "scenario": "A reviewer has 6 hours to check AI-processed claims, and each check takes 3 minutes. From 1,500 claims she checks as many as time allows, at random, and finds 6 errors.",
      "scenarioTable": null,
      "question": "If the rate holds, about how many errors are in all 1,500?",
      "options": {
        "A": "6, because these are the only errors the reviewer has actually found.",
        "B": "69, because only the 1,380 unchecked claims can still hold errors.",
        "C": "75, because 6 errors in 120 checked claims is a 5% rate on 1,500.",
        "D": "72, because the full set is twelve times the 120 checked claims."
      },
      "correct": "C",
      "whyCorrect": "75, because 6 errors in 120 checked claims is a 5% rate on 1,500.",
      "solutionSteps": [
        "6 h = 360 min ÷ 3 = 120 checked. 6 ÷ 120 = 5%. 5% of 1,500 = 75."
      ],
      "shortcut": "10% of 1,500 = 150, and half of that is 75.",
      "distractors": {
        "A": "Trap: Option A is found only.",
        "B": "Trap: Option B is unchecked only (69 + 6 = 75).",
        "D": "Trap: Option D rounds 12.5 down to 12.",
        "C": "Correct: 75, because 6 errors in 120 checked claims is a 5% rate on 1,500."
      }
    },
    {
      "id": 25,
      "category": "Fractions & Multi-step Calculations",
      "difficulty": "Easy",
      "topicFocus": "Fractions & Multi-step · Prompting & Task Execution",
      "concepts": [
        "Sequential calculations",
        "removing a fraction from a selected group"
      ],
      "scenario": "A team drafting a 600-word post follows the brainstorm-iterate loop. After expanding the outline into 24 bullets, they ask the AI to grade every bullet out of 10 and list those scoring below 9. Three-eighths of the bullets score below 9. After those are revised, one-third of the revised bullets still score below 9.",
      "scenarioTable": null,
      "question": "How many bullets need another round?",
      "options": {
        "A": "9 bullets, because that is the number that scored below 9 the first time.",
        "B": "3 bullets, because one-third of the 9 revised bullets still score below 9.",
        "C": "8 bullets, because one-third of all 24 bullets still score below 9.",
        "D": "15 bullets, because the other bullets already scored 9 or above."
      },
      "correct": "B",
      "whyCorrect": "3 bullets, because one-third of the 9 revised bullets still score below 9.",
      "solutionSteps": [
        "Bullets below 9 at first = 3/8 × 24 = 9.",
        "Of those 9, one-third still score below 9 = 1/3 × 9 = 3."
      ],
      "shortcut": "24 ÷ 8 = 3, so 3/8 of 24 is 9. Then 9 ÷ 3 = 3.",
      "distractors": {
        "A": "Option A stops at the intermediate result (the first round's count).",
        "C": "Option C applies one-third to the whole dataset instead of the selected group.",
        "D": "Option D reports the group that scored well, the opposite of what was asked.",
        "B": "Correct: 3 bullets, because one-third of the 9 revised bullets still score below 9."
      }
    },
    {
      "id": 26,
      "category": "Fractions & Multi-step Calculations",
      "difficulty": "Easy",
      "topicFocus": "Fractions & Multi-step · Prompting & Task Execution",
      "concepts": [
        "Fractions of a total",
        "sequential calculations"
      ],
      "scenario": "Before asking a question about contract risk, an analyst attaches 12 files to the prompt. One-quarter are near-duplicates of other files. Of the files that remain, one-third are not needed for this question. She removes both groups and labels each file that is left.",
      "scenarioTable": null,
      "question": "How many files stay attached?",
      "options": {
        "A": "9 files, because only the near-duplicate files were removed.",
        "B": "8 files, because one-third of the original 12 files were not needed.",
        "C": "3 files, because only the duplicate group is counted.",
        "D": "6 files, because one-third of the remaining 9 files were also removed."
      },
      "correct": "D",
      "whyCorrect": "6 files, because one-third of the remaining 9 files were also removed.",
      "solutionSteps": [
        "Near-duplicates = 1/4 × 12 = 3, leaving 9 files.",
        "Not needed = 1/3 × 9 = 3.",
        "Files that stay = 9 − 3 = 6."
      ],
      "shortcut": "Three-quarters of 12 is 9. Two-thirds of 9 is 6.",
      "distractors": {
        "A": "Option A stops after the first step (an intermediate result).",
        "B": "Option B takes one-third of the original 12, the wrong base (it ignores that duplicates were already removed).",
        "C": "Option C reports the size of the first removed group, not what remains.",
        "D": "Correct: 6 files, because one-third of the remaining 9 files were also removed."
      }
    },
    {
      "id": 27,
      "category": "Fractions & Multi-step Calculations",
      "difficulty": "Medium",
      "topicFocus": "Fractions & Multi-step · Output Evaluation & Validation",
      "concepts": [
        "Applying a rate to a different group"
      ],
      "scenario": "An analyst asks AI to run code on a sales file and report 120 weekly totals. She first confirms that the row count and column names match the file. Then she recomputes one-fifth of the totals by hand and finds that 3 of them are wrong. Assume the same error rate applies to the totals she did not recompute.",
      "scenarioTable": null,
      "question": "How many wrong totals are expected among the totals she did NOT recompute?",
      "options": {
        "A": "12 totals, because one-eighth of the 96 unchecked totals are expected to be wrong.",
        "B": "3 totals, because that is the number found in the sample.",
        "C": "15 totals, because one-eighth of all 120 totals are expected to be wrong.",
        "D": "24 totals, because that is the number of totals she recomputed."
      },
      "correct": "A",
      "whyCorrect": "12 totals, because one-eighth of the 96 unchecked totals are expected to be wrong.",
      "solutionSteps": [
        "Totals recomputed = 1/5 × 120 = 24. Unchecked = 120 − 24 = 96.",
        "Sample error rate = 3/24 = 1/8.",
        "Expected wrong among the unchecked = 1/8 × 96 = 12."
      ],
      "shortcut": "120 ÷ 5 = 24 checked. 3 out of 24 is 1 in 8. 96 ÷ 8 = 12.",
      "distractors": {
        "B": "Option B reports the sample count and does not apply the rate to the unchecked records.",
        "C": "Option C applies the rate to the entire dataset, including the 24 she already checked.",
        "D": "Option D reports the sample size, an intermediate result.",
        "A": "Correct: 12 totals, because one-eighth of the 96 unchecked totals are expected to be wrong."
      }
    },
    {
      "id": 28,
      "category": "Fractions & Multi-step Calculations",
      "difficulty": "Medium",
      "topicFocus": "Fractions & Multi-step · Output Evaluation & Validation",
      "concepts": [
        "Sequential calculations (remaining errors)"
      ],
      "scenario": "An AI drafts 800 customer reports a month. One in sixteen drafts contains a factual error. The account manager's defined review gate (checking facts against the dispatch record) catches four-fifths of those errors. The team's failure threshold is any error that reaches a customer.",
      "scenarioTable": null,
      "question": "How many erroneous reports reach customers each month?",
      "options": {
        "A": "50 reports, because that is how many drafts contain an error.",
        "B": "40 reports, because that is how many errors the gate catches.",
        "C": "10 reports, because one-fifth of the 50 erroneous drafts get past the gate.",
        "D": "160 reports, because one-fifth of all 800 drafts get past the gate."
      },
      "correct": "C",
      "whyCorrect": "10 reports, because one-fifth of the 50 erroneous drafts get past the gate.",
      "solutionSteps": [
        "Drafts with an error = 800 ÷ 16 = 50.",
        "Caught by the gate = 4/5 × 50 = 40.",
        "Reach customers = 50 − 40 = 10."
      ],
      "shortcut": "800 ÷ 16 = 50 (halve 800 four times). One-fifth of 50 is 10.",
      "distractors": {
        "A": "Option A reports the error count before the review and ignores the gate.",
        "B": "Option B reports the caught group instead of the remaining errors.",
        "D": "Option D applies the miss rate to the entire dataset instead of only the erroneous drafts.",
        "C": "Correct: 10 reports, because one-fifth of the 50 erroneous drafts get past the gate."
      }
    },
    {
      "id": 29,
      "category": "Fractions & Multi-step Calculations",
      "difficulty": "Medium",
      "topicFocus": "Fractions & Multi-step · Output Evaluation & Validation",
      "concepts": [
        "Sequential calculations",
        "removing a fraction from a selected group"
      ],
      "scenario": "A researcher uses AI with web search for a briefing. As the course recommends, she asks it to cite a source after each claim and mark any claim it cannot support as \"unverified\". The briefing has 80 claims. One-quarter come back marked \"unverified\". She opens the sources for half of the remaining claims and finds that one-sixth of those do not support what the briefing says.",
      "scenarioTable": null,
      "question": "How many claims did she find unsupported by their sources?",
      "options": {
        "A": "20 claims, because that is the number marked \"unverified\".",
        "B": "5 claims, because one-sixth of the 30 sources she opened did not support the claim.",
        "C": "10 claims, because one-sixth of all 60 cited claims did not support the claim.",
        "D": "30 claims, because that is the number of sources she opened."
      },
      "correct": "B",
      "whyCorrect": "5 claims, because one-sixth of the 30 sources she opened did not support the claim.",
      "solutionSteps": [
        "Marked \"unverified\" = 1/4 × 80 = 20. Cited claims = 80 − 20 = 60.",
        "Sources opened = 1/2 × 60 = 30.",
        "Unsupported = 1/6 × 30 = 5."
      ],
      "shortcut": "80 ÷ 4 = 20, so 60 remain. Half of 60 is 30. 30 ÷ 6 = 5.",
      "distractors": {
        "A": "Option A reports the unverified group, a different group from the one asked about.",
        "C": "Option C applies the rate to all 60 cited claims, including the 30 she never opened.",
        "D": "Option D reports the sample size, an intermediate result.",
        "B": "Correct: 5 claims, because one-sixth of the 30 sources she opened did not support the claim."
      }
    },
    {
      "id": 30,
      "category": "Fractions & Multi-step Calculations",
      "difficulty": "Medium",
      "topicFocus": "Fractions & Multi-step · Product & Model Selection",
      "concepts": [
        "Comparing two options at a common volume"
      ],
      "scenario": "A team sends similar prompts to two models, as the course recommends. Model A handled 600 outputs; 18 were wrong, and the total cost was $12. Model B handled 1,000 outputs; 25 were wrong, and the total cost was $25.",
      "scenarioTable": null,
      "question": "Which statement is correct?",
      "options": {
        "A": "Model A is cheaper and more accurate, because it has fewer wrong outputs and a lower total cost.",
        "B": "Model B is cheaper and more accurate, because it handled more outputs.",
        "C": "Model A is cheaper per output, but Model B has the lower error rate.",
        "D": "Model B is cheaper per output, but Model A has the lower error rate."
      },
      "correct": "C",
      "whyCorrect": "Model A is cheaper per output, but Model B has the lower error rate.",
      "solutionSteps": [
        "Cost per output: A = $12 ÷ 600 = $0.02. B = $25 ÷ 1,000 = $0.025. Model A is cheaper.",
        "Error rate: A = 18/600 = 3%. B = 25/1,000 = 2.5%. Model B is more accurate."
      ],
      "shortcut": "Compare at a common volume of 1,000. Model A: $20 and 30 wrong (600 × 5/3 = 1,000, so scale both by 5/3). Model B: $25 and 25 wrong. A costs less and B is wrong less often.",
      "distractors": {
        "A": "Option A compares raw totals across unequal datasets.",
        "B": "Option B treats a larger volume as proof of quality and ignores the rates.",
        "D": "Option D reverses both comparisons, which happens if the totals ($25 vs $12) are read as per-output costs.",
        "C": "Correct: Model A is cheaper per output, but Model B has the lower error rate."
      }
    },
    {
      "id": 31,
      "category": "Fractions & Multi-step Calculations",
      "difficulty": "Hard",
      "topicFocus": "Fractions & Multi-step · Workflow Integration & Solution Design",
      "concepts": [
        "Multi-step",
        "fractions of a total",
        "unit conversion"
      ],
      "scenario": "A delegation map for a weekly workflow has 24 steps. Half are AI-appropriate, one-third are collaborative, and the rest are human-retained. Each collaborative step needs a 15-minute review by a named person. Each human-retained step takes 45 minutes of human work. AI-appropriate steps need no human time.",
      "scenarioTable": null,
      "question": "How many human hours does one weekly run need?",
      "options": {
        "A": "5 hours, because 8 reviews at 15 minutes plus 4 steps at 45 minutes make 300 minutes.",
        "B": "2 hours, because only the collaborative reviews add human time.",
        "C": "3 hours, because only the human-retained steps add human time.",
        "D": "8 hours, because the AI-appropriate steps are also reviewed for 15 minutes each."
      },
      "correct": "A",
      "whyCorrect": "5 hours, because 8 reviews at 15 minutes plus 4 steps at 45 minutes make 300 minutes.",
      "solutionSteps": [
        "AI-appropriate = 1/2 × 24 = 12. Collaborative = 1/3 × 24 = 8. Human-retained = 24 − 12 − 8 = 4.",
        "Collaborative time = 8 × 15 = 120 minutes.",
        "Human-retained time = 4 × 45 = 180 minutes.",
        "Total = 300 minutes = 5 hours."
      ],
      "shortcut": "8 × 15 minutes = 2 hours. 4 × 45 minutes = 3 hours. 2 + 3 = 5.",
      "distractors": {
        "B": "Both B & C each report one of the two parts (an intermediate result).",
        "C": "Both B & C each report one of the two parts (an intermediate result).",
        "D": "Option D adds a review to the 12 AI-appropriate steps (20 × 15 + 180 = 480 minutes = 8 hours), applying a rate to the wrong group.",
        "A": "Correct: 5 hours, because 8 reviews at 15 minutes plus 4 steps at 45 minutes make 300 minutes."
      }
    },
    {
      "id": 32,
      "category": "Fractions & Multi-step Calculations",
      "difficulty": "Hard",
      "topicFocus": "Fractions & Multi-step · Workflow Integration & Solution Design",
      "concepts": [
        "Ratios and proportional reasoning",
        "remaining quantities"
      ],
      "scenario": "A review gate was designed for 20 cases a week, which one reviewer handles. Volume rises to 50 cases a week. The team adds a second reviewer who can handle three-quarters as many cases as the first.",
      "scenarioTable": null,
      "question": "How many cases per week now go through without a real review?",
      "options": {
        "A": "30 cases, because the first reviewer alone covers 20 of the 50.",
        "B": "35 cases, because that is the combined review capacity.",
        "C": "10 cases, because the second reviewer is as productive as the first.",
        "D": "15 cases, because 50 minus the combined capacity of 35 is 15."
      },
      "correct": "D",
      "whyCorrect": "15 cases, because 50 minus the combined capacity of 35 is 15.",
      "solutionSteps": [
        "Second reviewer = 3/4 × 20 = 15 cases.",
        "Combined capacity = 20 + 15 = 35 cases.",
        "Not reviewed = 50 − 35 = 15 cases."
      ],
      "shortcut": "3/4 of 20 is 15 (a quarter is 5). 20 + 15 = 35, and 50 − 35 = 15.",
      "distractors": {
        "A": "Option A forgets the second reviewer (50 − 20).",
        "B": "Option B reports the capacity, an intermediate result, not the shortfall.",
        "C": "Option C assumes equal productivity (20 + 20 = 40, so 50 − 40), which ignores the stated three-quarters.",
        "D": "Correct: 15 cases, because 50 minus the combined capacity of 35 is 15."
      }
    },
    {
      "id": 33,
      "category": "Fractions & Multi-step Calculations",
      "difficulty": "Medium",
      "topicFocus": "Fractions & Multi-step · Configuration & Knowledge Management",
      "concepts": [
        "Sequential calculations",
        "remaining quantities"
      ],
      "scenario": "A team's Project knowledge base holds 40 files that the AI uses to answer customer questions. A quarterly review finds that one-quarter of the files are out of date. Of the files that remain, one-fifth duplicate another file. Only current, non-duplicate files should stay.",
      "scenarioTable": null,
      "question": "How many files should remain?",
      "options": {
        "A": "30 files, because only the out-of-date files were removed.",
        "B": "6 files, because the duplicate group is the only group counted.",
        "C": "24 files, because one-fifth of the 30 current files are duplicates.",
        "D": "32 files, because one-fifth of all 40 files are duplicates."
      },
      "correct": "C",
      "whyCorrect": "24 files, because one-fifth of the 30 current files are duplicates.",
      "solutionSteps": [
        "Out of date = 1/4 × 40 = 10, leaving 30 current files.",
        "Duplicates = 1/5 × 30 = 6.",
        "Files that remain = 30 − 6 = 24."
      ],
      "shortcut": "Three-quarters of 40 is 30. Four-fifths of 30 is 24 (30 ÷ 5 = 6, then 30 − 6).",
      "distractors": {
        "A": "Option A stops after the first step (an intermediate result).",
        "B": "Option B reports the duplicate group instead of what remains.",
        "D": "Option D applies one-fifth to the entire dataset (40 − 8 = 32) instead of the 30 current files.",
        "C": "Correct: 24 files, because one-fifth of the 30 current files are duplicates."
      }
    },
    {
      "id": 34,
      "category": "Fractions & Multi-step Calculations",
      "difficulty": "Easy",
      "topicFocus": "Fractions & Multi-step · Governance, Risk & Responsible Use",
      "concepts": [
        "Fractions of a total",
        "remaining quantities"
      ],
      "scenario": "A team wants AI to analyse 2,400 customer records. Using the three data tiers, they find that one-sixth of the records contain red-tier data, such as credentials, and cannot go through this route. Of the remaining records, one-quarter are yellow (they need a confirmed approved route). The rest are green.",
      "scenarioTable": null,
      "question": "How many records are green?",
      "options": {
        "A": "1,500 records, because green is what remains after removing the red and yellow groups.",
        "B": "2,000 records, because only the red records are removed.",
        "C": "500 records, because that is the yellow group.",
        "D": "400 records, because that is the red group."
      },
      "correct": "A",
      "whyCorrect": "1,500 records, because green is what remains after removing the red and yellow groups.",
      "solutionSteps": [
        "Red = 1/6 × 2,400 = 400. Remaining = 2,000.",
        "Yellow = 1/4 × 2,000 = 500.",
        "Green = 2,000 − 500 = 1,500."
      ],
      "shortcut": "2,400 ÷ 6 = 400. Three-quarters of 2,000 is 1,500.",
      "distractors": {
        "B": "Option B stops after the first removal (an intermediate result).",
        "C": "Both C & D each report one group (yellow or red) instead of the group asked about.",
        "D": "Both C & D each report one group (yellow or red) instead of the group asked about.",
        "A": "Correct: 1,500 records, because green is what remains after removing the red and yellow groups."
      }
    },
    {
      "id": 35,
      "category": "Fractions & Multi-step Calculations",
      "difficulty": "Hard",
      "topicFocus": "Fractions & Multi-step · Governance, Risk & Responsible Use",
      "concepts": [
        "Applying a rate to a different group"
      ],
      "scenario": "A team lead audits a month of AI-assisted client reports. Policy says every report must pass a defined review gate. She samples 60 of the 480 reports and finds that 9 skipped the gate under deadline pressure. Assume the sample rate applies to all reports.",
      "scenarioTable": null,
      "question": "How many of the 420 reports she did NOT sample are expected to have skipped the gate?",
      "options": {
        "A": "9 reports, because that is the number found in the sample.",
        "B": "63 reports, because three-twentieths of the 420 unsampled reports are expected to be affected.",
        "C": "72 reports, because three-twentieths of all 480 reports are expected to be affected.",
        "D": "51 reports, because that is the number of sampled reports that kept the gate."
      },
      "correct": "B",
      "whyCorrect": "63 reports, because three-twentieths of the 420 unsampled reports are expected to be affected.",
      "solutionSteps": [
        "Sample rate = 9/60 = 3/20.",
        "Unsampled reports = 480 − 60 = 420.",
        "Expected skipped = 3/20 × 420 = 63."
      ],
      "shortcut": "420 ÷ 20 = 21, then 21 × 3 = 63.",
      "distractors": {
        "A": "Option A reports the sample count and does not apply the rate to unchecked records.",
        "C": "Option C applies the rate to the entire dataset, including the 60 already audited.",
        "D": "Option D reports the sampled reports that kept the gate, the opposite group.",
        "B": "Correct: 63 reports, because three-twentieths of the 420 unsampled reports are expected to be affected."
      }
    },
    {
      "id": 36,
      "category": "Fractions & Multi-step Calculations",
      "difficulty": "Hard",
      "topicFocus": "Fractions & Multi-step · Troubleshooting & Optimization",
      "concepts": [
        "Fractions of a total",
        "remaining quantities"
      ],
      "scenario": "A team traces 72 disappointing outputs to the four causes taught in Workflow Design & Diagnosis. One-third were under-specification, one-quarter were context overload, and one-sixth were wrong feature or model. The rest were stale configuration.",
      "scenarioTable": null,
      "question": "How many outputs were caused by stale configuration?",
      "options": {
        "A": "12 outputs, because that is the wrong feature or model group.",
        "B": "24 outputs, because that is the largest group, under-specification.",
        "C": "54 outputs, because that is the total of the three named causes.",
        "D": "18 outputs, because 72 minus the three named groups is 18."
      },
      "correct": "D",
      "whyCorrect": "18 outputs, because 72 minus the three named groups is 18.",
      "solutionSteps": [
        "Under-specification = 1/3 × 72 = 24.",
        "Context overload = 1/4 × 72 = 18.",
        "Wrong feature or model = 1/6 × 72 = 12.",
        "Named causes total 24 + 18 + 12 = 54, so stale configuration = 72 − 54 = 18."
      ],
      "shortcut": "1/3 + 1/4 + 1/6 = 4/12 + 3/12 + 2/12 = 9/12 = 3/4. The remaining 1/4 of 72 is 18.",
      "distractors": {
        "A": "Both A & B each report one named group, an intermediate result.",
        "B": "Both A & B each report one named group, an intermediate result.",
        "C": "Option C reports the combined total of the named groups, not the remainder.",
        "D": "Correct: 18 outputs, because 72 minus the three named groups is 18."
      }
    },
    {
      "id": 37,
      "category": "Time, Cost & Efficiency",
      "difficulty": "Easy–Medium",
      "topicFocus": "Time, Cost & Efficiency · Annual saving from a measured baseline",
      "concepts": [
        "Time, Cost & Efficiency",
        "Unit Conversion",
        "Net Savings"
      ],
      "scenario": "Three analysts prepare a weekly report. The measured baseline was 50 minutes per analyst per week. After the team moved the repeated background into a Project and the format into a Skill, each report takes 30 minutes. Assume 50 working weeks in a year.",
      "scenarioTable": null,
      "question": "How many hours does the team save in one year?",
      "options": {
        "A": "1 hour, because this is the team's saving for a single week.",
        "B": "50 hours, because each report saves 20 minutes across 3 analysts for 50 weeks.",
        "C": "75 hours, because the new 30-minute time is counted as the saving.",
        "D": "125 hours, because the old 50-minute baseline is counted as the saving."
      },
      "correct": "B",
      "whyCorrect": "50 hours, because each report saves 20 minutes across 3 analysts for 50 weeks.",
      "solutionSteps": [
        "Saving per analyst per week = 50 − 30 = 20 minutes.",
        "Team saving per week = 20 × 3 = 60 minutes.",
        "Yearly saving = 60 × 50 = 3,000 minutes.",
        "Hours saved = 3,000 ÷ 60 = 50 hours."
      ],
      "shortcut": "Saving = old time − new time. 20 min × 3 people = 1 hour a week, so 50 weeks = 50 hours.",
      "distractors": {
        "A": "Option A gives one week of team saving, not a year.",
        "C": "Option C uses the new time instead of the difference.",
        "D": "Option D uses the old baseline instead of the difference.",
        "B": "Correct: 50 hours, because each report saves 20 minutes across 3 analysts for 50 weeks."
      }
    },
    {
      "id": 38,
      "category": "Time, Cost & Efficiency",
      "difficulty": "Medium",
      "topicFocus": "Time, Cost & Efficiency · Net saving after a one-time Skill setup",
      "concepts": [
        "Time, Cost & Efficiency",
        "Unit Conversion",
        "Net Savings"
      ],
      "scenario": "A law firm drafts 40 client letters every month. Each letter takes 25 minutes from scratch. After the firm builds a Skill that holds the letter template and tone rules, each letter takes 10 minutes. Building the Skill took 6 hours, once.",
      "scenarioTable": null,
      "question": "How many hours does the firm save in the first 12 months, after subtracting the setup time?",
      "options": {
        "A": "120 hours, because the setup time is ignored.",
        "B": "126 hours, because the setup time is added to the saving.",
        "C": "114 hours, because 120 hours are saved over the year and 6 hours went into setup.",
        "D": "10 hours, because this is the saving for a single month."
      },
      "correct": "C",
      "whyCorrect": "114 hours, because 120 hours are saved over the year and 6 hours went into setup.",
      "solutionSteps": [
        "Saving per letter = 25 − 10 = 15 minutes.",
        "Monthly saving = 15 × 40 = 600 minutes = 10 hours.",
        "Saving over 12 months = 10 × 12 = 120 hours.",
        "Net saving = 120 − 6 (setup) = 114 hours."
      ],
      "shortcut": "15 min × 40 letters = 10 hours a month; 10 × 12 = 120 hours; then subtract the 6-hour setup.",
      "distractors": {
        "A": "Option A ignores the setup time.",
        "B": "Option B adds the setup time instead of subtracting it.",
        "D": "Option D gives one month of saving, not twelve.",
        "C": "Correct: 114 hours, because 120 hours are saved over the year and 6 hours went into setup."
      }
    },
    {
      "id": 39,
      "category": "Time, Cost & Efficiency",
      "difficulty": "Medium",
      "topicFocus": "Time, Cost & Efficiency · Break-even on a one-time setup",
      "concepts": [
        "Time, Cost & Efficiency",
        "Unit Conversion",
        "Net Savings"
      ],
      "scenario": "A monthly reconciliation takes 3 hours by hand. A script is built once: writing the brief and doing the known-answer test take 5 hours in total. After that, each monthly run needs 30 minutes (running it and checking the output).",
      "scenarioTable": null,
      "question": "After how many months have the cumulative savings covered the 5-hour setup?",
      "options": {
        "A": "10 months, because the setup is divided by the 30-minute run time.",
        "B": "5 months, because the script saves only 1 hour per month.",
        "C": "2 months, because the net saving is 2.5 hours per month.",
        "D": "1 month, because the script replaces the full 3-hour task."
      },
      "correct": "C",
      "whyCorrect": "2 months, because the net saving is 2.5 hours per month.",
      "solutionSteps": [
        "Net saving per month = 3 − 0.5 = 2.5 hours.",
        "Break-even = setup ÷ net saving = 5 ÷ 2.5 = 2 months."
      ],
      "shortcut": "Break-even always divides the setup by the net saving: 2.5 × 2 = 5.",
      "distractors": {
        "A": "Option A divides by the run time instead of the saving.",
        "B": "Option B assumes the wrong monthly saving.",
        "D": "Option D ignores both the run time and the setup.",
        "C": "Correct: 2 months, because the net saving is 2.5 hours per month."
      }
    },
    {
      "id": 40,
      "category": "Time, Cost & Efficiency",
      "difficulty": "Easy–Medium",
      "topicFocus": "Unit Conversion & Token Cost · Billing input and output tokens at different rates",
      "concepts": [
        "Unit Conversion & Token Cost",
        "Unit Conversion",
        "Net Savings"
      ],
      "scenario": "A vendor bills $2 per 1 million input tokens and $10 per 1 million output tokens. One summarization job reads 500,000 input tokens and writes 100,000 output tokens.",
      "scenarioTable": null,
      "question": "What is the cost of this job?",
      "options": {
        "A": "$1, because only the input tokens are billed.",
        "B": "$2, because input and output tokens are each billed at their own rate.",
        "C": "$6, because all 600,000 tokens are billed at the output rate.",
        "D": "$12, because the two per-million rates are added together."
      },
      "correct": "B",
      "whyCorrect": "$2, because input and output tokens are each billed at their own rate.",
      "solutionSteps": [
        "Input cost = 0.5 million × $2 = $1.",
        "Output cost = 0.1 million × $10 = $1.",
        "Total cost = $1 + $1 = $2."
      ],
      "shortcut": "Convert to millions (0.5 and 0.1), multiply each by its own rate, then add.",
      "distractors": {
        "A": "Option A leaves out the output cost.",
        "C": "Option C bills everything at the output rate.",
        "D": "Option D adds the rates instead of applying them to token counts.",
        "B": "Correct: $2, because input and output tokens are each billed at their own rate."
      }
    },
    {
      "id": 41,
      "category": "Time, Cost & Efficiency",
      "difficulty": "Medium",
      "topicFocus": "Unit Conversion & Token Cost · Converting words to tokens against a context window",
      "concepts": [
        "Unit Conversion & Token Cost",
        "Unit Conversion",
        "Net Savings"
      ],
      "scenario": "A model has a 1,000,000-token context window. Assume 1 token is about 0.75 words (so 3 words is about 4 tokens). A folder of contracts holds 600,000 words. The instructions, earlier chat and reply budget already use 150,000 tokens.",
      "scenarioTable": null,
      "question": "How many tokens of space remain after the folder is loaded?",
      "options": {
        "A": "50,000 tokens, because the folder takes 800,000 tokens and 150,000 are already in use.",
        "B": "200,000 tokens, because the 150,000 tokens already in use are ignored.",
        "C": "250,000 tokens, because the words are subtracted as if they were tokens.",
        "D": "400,000 tokens, because words are treated as tokens and the used space is ignored."
      },
      "correct": "A",
      "whyCorrect": "50,000 tokens, because the folder takes 800,000 tokens and 150,000 are already in use.",
      "solutionSteps": [
        "Folder size in tokens = 600,000 ÷ 0.75 = 800,000 tokens.",
        "Space after the folder = 1,000,000 − 800,000 = 200,000 tokens.",
        "Space after existing use = 200,000 − 150,000 = 50,000 tokens."
      ],
      "shortcut": "Convert units first: 600,000 ÷ 3 × 4 = 800,000 tokens. Then subtract.",
      "distractors": {
        "B": "Option B ignores the tokens already in use.",
        "C": "Option C subtracts words as if they were tokens.",
        "D": "Option D mixes words with tokens and ignores the used space.",
        "A": "Correct: 50,000 tokens, because the folder takes 800,000 tokens and 150,000 are already in use."
      }
    },
    {
      "id": 42,
      "category": "Time, Cost & Efficiency",
      "difficulty": "Easy–Medium",
      "topicFocus": "Unit Conversion & Growth · Converting a time span into doubling periods",
      "concepts": [
        "Unit Conversion & Growth",
        "Unit Conversion",
        "Net Savings"
      ],
      "scenario": "A team reads that the longest task an AI model could finish grew from about 7 minutes (mid-2024) to about 1 hour (early 2025). Assume, as in that report, that this length keeps doubling about every 7 months. Today the model can finish tasks up to 1 hour long.",
      "scenarioTable": null,
      "question": "What task length is expected 14 months from now?",
      "options": {
        "A": "2 hours, because only one doubling occurs.",
        "B": "4 hours, because 14 months contains two doublings.",
        "C": "8 hours, because three doublings are counted.",
        "D": "15 hours, because the 14 months are added to the 1-hour length."
      },
      "correct": "B",
      "whyCorrect": "4 hours, because 14 months contains two doublings.",
      "solutionSteps": [
        "Number of doublings = 14 ÷ 7 = 2.",
        "After the first doubling: 1 × 2 = 2 hours.",
        "After the second doubling: 2 × 2 = 4 hours."
      ],
      "shortcut": "Count the doublings first: 14 ÷ 7 = 2, so multiply by 4.",
      "distractors": {
        "A": "Option A counts one doubling only.",
        "C": "Option C counts three doublings.",
        "D": "Option D adds months to hours, which mixes units.",
        "B": "Correct: 4 hours, because 14 months contains two doublings."
      }
    },
    {
      "id": 43,
      "category": "Time, Cost & Efficiency",
      "difficulty": "Medium",
      "topicFocus": "Time, Cost & Efficiency · Human time saved by a scheduled agent",
      "concepts": [
        "Time, Cost & Efficiency",
        "Unit Conversion",
        "Net Savings"
      ],
      "scenario": "A cloud agent is scheduled to check competitor prices every weekday. Doing the check by hand takes 40 minutes. With the schedule, the only human time is 5 minutes spent approving the result at the human gate. Assume 240 working days a year.",
      "scenarioTable": null,
      "question": "How many hours of human time does the schedule save per year?",
      "options": {
        "A": "20 hours, because the 5-minute approval is counted as the saving.",
        "B": "160 hours, because the approval time is not deducted.",
        "C": "140 hours, because each day saves 35 minutes of human time.",
        "D": "8,400 hours, because the 35 minutes a day are not converted from minutes to hours."
      },
      "correct": "C",
      "whyCorrect": "140 hours, because each day saves 35 minutes of human time.",
      "solutionSteps": [
        "Daily human saving = 40 − 5 = 35 minutes.",
        "Yearly saving = 35 × 240 = 8,400 minutes.",
        "Hours saved = 8,400 ÷ 60 = 140 hours."
      ],
      "shortcut": "35 min × 240 days = 8,400 minutes; divide by 60 to get 140 hours.",
      "distractors": {
        "A": "Option A uses the approval time as the saving.",
        "B": "Option B forgets to deduct the approval time.",
        "D": "Option D leaves the result in minutes but calls it hours.",
        "C": "Correct: 140 hours, because each day saves 35 minutes of human time."
      }
    },
    {
      "id": 44,
      "category": "Time, Cost & Efficiency",
      "difficulty": "Hard",
      "topicFocus": "Time, Cost & Efficiency · Total cost of a model tier (fees plus human fixing)",
      "concepts": [
        "Time, Cost & Efficiency",
        "Unit Conversion",
        "Net Savings"
      ],
      "scenario": "A team runs 400 tasks a month on the fast model tier. Each task costs $0.50, and 10% of outputs need a 15-minute human fix. Staff time costs $24 per hour.",
      "scenarioTable": null,
      "question": "What is the total monthly cost on the fast tier (usage fees plus fix time)?",
      "options": {
        "A": "$200, because only the usage fees are counted.",
        "B": "$240, because only the labour cost is counted.",
        "C": "$344, because the 600 fix minutes are converted to 6 hours.",
        "D": "$440, because $200 in fees is added to 10 hours of fix time at $24 per hour."
      },
      "correct": "D",
      "whyCorrect": "$440, because $200 in fees is added to 10 hours of fix time at $24 per hour.",
      "solutionSteps": [
        "Usage fees = 400 × $0.50 = $200.",
        "Outputs needing a fix = 10% × 400 = 40.",
        "Fix time = 40 × 15 = 600 minutes = 10 hours.",
        "Labour cost = 10 × $24 = $240.",
        "Total = $200 + $240 = $440."
      ],
      "shortcut": "10% of 400 = 40 fixes; 40 × 15 min = 10 h; 10 × $24 = $240; add the $200 in fees.",
      "distractors": {
        "A": "Option A leaves out the labour cost.",
        "B": "Option B leaves out the usage fees.",
        "C": "Option C converts minutes to hours incorrectly.",
        "D": "Correct: $440, because $200 in fees is added to 10 hours of fix time at $24 per hour."
      }
    },
    {
      "id": 45,
      "category": "Time, Cost & Efficiency",
      "difficulty": "Medium",
      "topicFocus": "Time & Capacity · Approver capacity versus gate workload",
      "concepts": [
        "Time & Capacity",
        "Unit Conversion",
        "Net Savings"
      ],
      "scenario": "A weekly workflow produces 120 invoices. Its defined gate requires one named approver to spend 4 minutes on each invoice. The approver has 5 hours per week available for this gate.",
      "scenarioTable": null,
      "question": "By how many minutes is the approver's weekly time short of what the gate needs?",
      "options": {
        "A": "180 minutes, because the gate needs 480 minutes and only 300 are available.",
        "B": "300 minutes, because this is the approver's available time.",
        "C": "480 minutes, because this is the total time the gate needs.",
        "D": "780 minutes, because the needed and available times are added together."
      },
      "correct": "A",
      "whyCorrect": "180 minutes, because the gate needs 480 minutes and only 300 are available.",
      "solutionSteps": [
        "Time needed = 120 × 4 = 480 minutes.",
        "Time available = 5 × 60 = 300 minutes.",
        "Shortfall = 480 − 300 = 180 minutes."
      ],
      "shortcut": "Needed 480, available 300, so the gap is the difference: 180.",
      "distractors": {
        "B": "Option B gives only the available time.",
        "C": "Option C gives only the required time.",
        "D": "Option D adds the two times instead of subtracting.",
        "A": "Correct: 180 minutes, because the gate needs 480 minutes and only 300 are available."
      }
    },
    {
      "id": 46,
      "category": "Time, Cost & Efficiency",
      "difficulty": "Easy",
      "topicFocus": "Time, Cost & Efficiency · Own time saved by delegating",
      "concepts": [
        "Time, Cost & Efficiency",
        "Unit Conversion",
        "Net Savings"
      ],
      "scenario": "Doing a market scan yourself takes 90 minutes. You delegate it: you spend 10 minutes writing the Delegation Brief, the AI works for 12 minutes without you, and you spend 20 minutes verifying the claims that matter before accepting.",
      "scenarioTable": null,
      "question": "How many minutes of your own time does delegating save?",
      "options": {
        "A": "12 minutes, because only the AI's working time is counted.",
        "B": "30 minutes, because the time spent briefing and verifying is counted as the saving.",
        "C": "48 minutes, because the AI's 12 minutes is also deducted as if it were your time.",
        "D": "60 minutes, because only the brief and the verification use your own time."
      },
      "correct": "D",
      "whyCorrect": "60 minutes, because only the brief and the verification use your own time.",
      "solutionSteps": [
        "Your own time = 10 (brief) + 20 (verification) = 30 minutes.",
        "Saving = 90 − 30 = 60 minutes."
      ],
      "shortcut": "Your time is brief plus check = 30, so 90 − 30 = 60. The AI's working time is not yours.",
      "distractors": {
        "A": "Option A gives the AI's time only.",
        "B": "Option B gives the time you still spend, not the saving.",
        "C": "Option C deducts the AI's time as if it were yours.",
        "D": "Correct: 60 minutes, because only the brief and the verification use your own time."
      }
    },
    {
      "id": 47,
      "category": "Time, Cost & Efficiency",
      "difficulty": "Hard",
      "topicFocus": "Time, Cost & Efficiency · Extra cost per hour of human time saved",
      "concepts": [
        "Time, Cost & Efficiency",
        "Unit Conversion",
        "Net Savings"
      ],
      "scenario": "A support team handles 1,200 tasks a month. A human completes a task in 8 minutes at a cost of $4. An AI-assisted route needs 5 minutes of human time and costs $6 per task.",
      "scenarioTable": null,
      "question": "What is the extra cost of each hour of human time saved by moving to the AI-assisted route?",
      "options": {
        "A": "$40, because the extra $2,400 buys 60 saved hours.",
        "B": "$80, because the human route's total cost is divided by the hours saved.",
        "C": "$120, because the AI route's total cost is divided by the hours saved.",
        "D": "$2,400, because the extra cost is not divided by the hours saved."
      },
      "correct": "A",
      "whyCorrect": "$40, because the extra $2,400 buys 60 saved hours.",
      "solutionSteps": [
        "Time saved = (8 − 5) × 1,200 = 3,600 minutes = 60 hours.",
        "Extra cost = ($6 − $4) × 1,200 = $2,400.",
        "Extra cost per hour saved = $2,400 ÷ 60 = $40."
      ],
      "shortcut": "Per task: extra $2 for 3 minutes (0.05 hour) saved, and $2 ÷ 0.05 = $40.",
      "distractors": {
        "B": "Option B divides the human route's total cost ($4,800) instead of the extra cost.",
        "C": "Option C divides the AI route's total cost ($7,200) instead of the extra cost.",
        "D": "Option D gives the extra cost without dividing by the hours saved.",
        "A": "Correct: $40, because the extra $2,400 buys 60 saved hours."
      }
    },
    {
      "id": 48,
      "category": "Time, Cost & Efficiency",
      "difficulty": "Easy",
      "topicFocus": "Time, Cost & Efficiency · Time saved by limiting a check to meaningful work",
      "concepts": [
        "Time, Cost & Efficiency",
        "Unit Conversion",
        "Net Savings"
      ],
      "scenario": "A team runs 50 AI tasks each week. A manager makes everyone apply the full four-question governance check, taking 10 minutes, to every task. Only 20 of the 50 tasks involve someone else's data, money, or a decision about a person (meaningful work); the other 30 are trivial.",
      "scenarioTable": null,
      "question": "How much time per week does the team save if the check is limited to meaningful work?",
      "options": {
        "A": "20 minutes, because the number of meaningful tasks is read as minutes.",
        "B": "30 minutes, because the number of trivial tasks is read as minutes.",
        "C": "200 minutes, because this is the check time that remains for meaningful work.",
        "D": "300 minutes, because the 30 trivial tasks no longer need the 10-minute check."
      },
      "correct": "D",
      "whyCorrect": "300 minutes, because the 30 trivial tasks no longer need the 10-minute check.",
      "solutionSteps": [
        "Trivial tasks = 50 − 20 = 30.",
        "Time saved = 30 × 10 = 300 minutes."
      ],
      "shortcut": "Saving = trivial tasks × 10 minutes = 300. The 200 minutes is what remains, not what is saved.",
      "distractors": {
        "A": "Option A reads a task count as minutes.",
        "B": "Option B reads a task count as minutes.",
        "C": "Option C gives the time that remains, not the time saved.",
        "D": "Correct: 300 minutes, because the 30 trivial tasks no longer need the 10-minute check."
      }
    },
    {
      "id": 49,
      "category": "Comparative Decision Scenarios",
      "difficulty": "Hard",
      "topicFocus": "Comparative Decisions · Spending limits",
      "concepts": [
        "Spending limits",
        "Table + statements"
      ],
      "scenario": "Departments are checked five months into the year. Assume each budget is meant to be spent evenly across the 12 months and that the current spending pace continues.\n\nStatement I: At its current monthly pace, Support will finish the year $4,800 over budget.\n\nStatement II: Legal is on pace to overspend, because it has already used more than 40% of its budget.",
      "scenarioTable": {
        "headers": [
          "Department",
          "Annual budget",
          "Spent after 5 months"
        ],
        "rows": [
          [
            "Support",
            "$60,000",
            "$27,000"
          ],
          [
            "Sales",
            "$48,000",
            "$19,000"
          ],
          [
            "Legal",
            "$30,000",
            "$12,500"
          ]
        ]
      },
      "question": "Evaluate Statement I and Statement II and select the correct option.",
      "options": {
        "A": "Only Statement I is correct",
        "B": "Only Statement II is correct",
        "C": "Both Statements I and II are correct",
        "D": "Neither statement is correct"
      },
      "correct": "A",
      "whyCorrect": "Support's overspend is real and equals $4,800. Legal's spending exactly matches its monthly allowance.",
      "solutionSteps": [
        "Monthly pace = 27,000 ÷ 5 = $5,400.",
        "Year-end projection = 5,400 × 12 = $64,800.",
        "64,800 − 60,000 = $4,800 over. TRUE.",
        "Monthly allowance = 30,000 ÷ 12 = $2,500.",
        "Allowance for 5 months = 5 × 2,500 = $12,500. Legal has spent exactly that.",
        "Legal is exactly on pace, so it will finish on budget. \"More than 40% used\" is not the test, because 5 of 12 months is already about 42% of the year. FALSE."
      ],
      "shortcut": "Support's allowance is $5,000 a month but it spends $5,400, so it is $400 a month over. 400 × 12 = $4,800. Legal's allowance is $2,500 a month and it has spent 5 × 2,500.",
      "distractors": {
        "B": "Uses the “more than 40% spent” figure as proof that Legal is overspending, without comparing it with the 5 months elapsed. It also overlooks that Support has used 45% of its budget while only about 41.7% of the year has passed.",
        "C": "Makes the same fixed-percentage mistake for Legal, treating its 40% threshold as the test instead of comparing spending with elapsed time.",
        "D": "Assumes Support is on pace because 45% of its annual budget is below the halfway mark. It overlooks that five months is only about 41.7% of the year, so Support is already spending faster than planned.",
        "A": "Correct: Support's overspend is real and equals $4,800. Legal's spending exactly matches its monthly allowance."
      }
    },
    {
      "id": 50,
      "category": "Comparative Decision Scenarios",
      "difficulty": "Medium",
      "topicFocus": "Comparative Decisions · Budget Evaluation and Vendor Selection",
      "concepts": [
        "Budget cap",
        "Table, which options meet it"
      ],
      "scenario": "A company is evaluating three vendors for a six-month AI customer-support automation pilot. The procurement team has an approved budget of $25,000 for the entire pilot. Each vendor charges a one-time setup fee and a recurring monthly fee.\n\nBased on the six-month contract costs, evaluate the following statements:\n\nStatement I: Vendors P and Q have the same total cost despite having different setup and monthly fee structures.\n\nStatement II: Vendor R remains within the approved budget but leaves less unused budget than Vendor P.",
      "scenarioTable": {
        "headers": [
          "Vendor",
          "Setup Fee",
          "Monthly Fee"
        ],
        "rows": [
          [
            "P",
            "$3,000",
            "$3,500"
          ],
          [
            "Q",
            "$6,000",
            "$3,000"
          ],
          [
            "R",
            "$1,500",
            "$3,900"
          ]
        ]
      },
      "question": "Which option is correct?",
      "options": {
        "A": "Only Statement I is correct.",
        "B": "Only Statement II is correct.",
        "C": "Both Statements I and II are correct.",
        "D": "Neither Statement I nor Statement II is correct."
      },
      "correct": "C",
      "whyCorrect": "Both statements are correct. Vendor R is within the $25,000 budget but leaves only $100, compared with $1,000 for Vendor P.",
      "solutionSteps": [
        "P = $3,000 + ($3,500 × 6) = $24,000",
        "Q = $6,000 + ($3,000 × 6) = $24,000",
        "R = $1,500 + ($3,900 × 6) = $24,900"
      ],
      "shortcut": "Calculate Setup + (6 × Monthly) for each vendor cleanly: P = 3k + 21k = 24k; Q = 6k + 18k = 24k; R = 1.5k + 23.4k = 24.9k.",
      "distractors": {
        "A": "Incomplete: Statement I is true ($24,000 each), and Statement II is also true ($24,900 fits inside $25,000 leaving $100 vs $1,000).",
        "B": "Incomplete: Statement II is true, and Statement I is also true because P ($3k + $21k) and Q ($6k + $18k) both total $24,000.",
        "C": "Correct: Both statements are correct. Vendor R is within the $25,000 budget but leaves only $100, compared with $1,000 for Vendor P.",
        "D": "False: Both statements hold cleanly from 6-month totals (P = $24,000, Q = $24,000, R = $24,900 against $25,000 budget)."
      }
    },
    {
      "id": 51,
      "category": "Comparative Decision Scenarios",
      "difficulty": "Medium",
      "topicFocus": "Comparative Decisions · Spending limits",
      "concepts": [
        "Spending limits",
        "Committed vs paid"
      ],
      "scenario": "A department has a spending cap of $50,000. For this question, the cap includes amounts already paid, unpaid invoices and approved purchase orders, provided they represent separate commitments. The department has paid $38,000, holds $9,000 in unpaid invoices, and has an approved $6,000 purchase order that is not included in those invoices.",
      "scenarioTable": null,
      "question": "What is its position against the cap?",
      "options": {
        "A": "Within the cap by $12,000, because only the $38,000 already paid has been spent.",
        "B": "Over the cap by $3,000, because paid, invoiced and ordered amounts all count against the cap.",
        "C": "Within the cap by $3,000, because the approved purchase order is not yet spent.",
        "D": "Within the cap by $6,000, because the $9,000 of unpaid invoices is not yet spent."
      },
      "correct": "B",
      "whyCorrect": "A spending limit is measured against everything the department has already committed to pay, not only what has been paid out.",
      "solutionSteps": [
        "Paid = $38,000.",
        "Unpaid invoices are an existing obligation, so add $9,000.",
        "The purchase order is stated to be separate from the invoices, so there is no double counting. It is a further commitment, so add $6,000.",
        "Total committed = 38,000 + 9,000 + 6,000 = $53,000.",
        "53,000 − 50,000 = $3,000 over the cap."
      ],
      "shortcut": "38 + 9 = 47, and 47 + 6 = 53.",
      "distractors": {
        "A": "Counts cash paid only (50,000 − 38,000) and ignores both commitments.",
        "C": "Counts paid plus invoices (47,000) but ignores the purchase order.",
        "D": "Counts paid plus the purchase order (44,000) but ignores the unpaid invoices.",
        "B": "Correct: a spending limit is measured against everything the department has already committed to pay, not only what has been paid out."
      }
    },
    {
      "id": 52,
      "category": "Comparative Decision Scenarios",
      "difficulty": "Hard",
      "topicFocus": "Comparative Decisions · Vendor plans",
      "concepts": [
        "Vendor plans",
        "Table + statements"
      ],
      "scenario": "Two vendor plans are compared for a team's monthly tasks.\n\nStatement I: At 1,300 tasks a month, Plan X is cheaper than Plan Y.\n\nStatement II: Plan Y is cheaper than Plan X at any volume up to 1,000 tasks.",
      "scenarioTable": {
        "headers": [
          "Plan",
          "Monthly fee",
          "Tasks included",
          "Each extra task"
        ],
        "rows": [
          [
            "X",
            "$400",
            "1,000",
            "$0.50"
          ],
          [
            "Y",
            "$250",
            "500",
            "$0.80"
          ]
        ]
      },
      "question": "Evaluate Statement I and Statement II and select the correct option.",
      "options": {
        "A": "Both Statements I and II are correct",
        "B": "Only Statement II is correct",
        "C": "Neither statement is correct",
        "D": "Only Statement I is correct"
      },
      "correct": "D",
      "whyCorrect": "At high volume X wins, and Y is cheaper only below the 687.5-task crossover, well short of 1,000.",
      "solutionSteps": [
        "Plan X: 300 extra tasks × $0.50 = $150, so 400 + 150 = $550.",
        "Plan Y: 800 extra tasks × $0.80 = $640, so 250 + 640 = $890.",
        "$550 < $890. TRUE.",
        "Plan X costs a flat $400 for any volume up to 1,000 tasks.",
        "Plan Y costs $250 up to 500 tasks, then $250 + 0.80 × (tasks − 500).",
        "Set Y equal to X: 250 + 0.80 × (n − 500) = 400, so 0.80 × (n − 500) = 150, so n − 500 = 187.5, so n = 687.5 tasks."
      ],
      "shortcut": "Y's fee is $150 lower than X's ($400 − $250). Each task above Y's 500 costs $0.80, so the $150 advantage is used up after 150 ÷ 0.80 = 187.5 extra tasks, which is at 500 + 187.5 = 687.5 tasks.",
      "distractors": {
        "A": "Overlooks the crossover point and assumes Plan Y's lower base fee keeps it cheaper throughout the range up to 1,000 tasks.",
        "B": "Treats Plan Y's $150 lower base fee as decisive, while overlooking that its $0.80 extra-task charge begins after 500 tasks. It may also incorrectly count all 1,300 tasks as extra for Plan X, rather than only the 300 above its allowance.",
        "C": "Assumes the lower monthly fee always determines the cheaper plan, ignoring the different included volumes and extra-task rates.",
        "D": "Correct: at high volume X wins, and Y is cheaper only below the 687.5-task crossover, well short of 1,000."
      }
    },
    {
      "id": 53,
      "category": "Comparative Decision Scenarios",
      "difficulty": "Hard",
      "topicFocus": "Comparative Decisions · Vendors at a common volume",
      "concepts": [
        "Vendors at a common volume",
        "Fix cost included"
      ],
      "scenario": "A company is considering outsourcing its customer-record processing to one of two vendors. Before signing a service contract, the procurement team compares their costs for processing 1,000 customer records. Since inaccurate records require manual correction, the company includes a $1 correction cost for every incorrect record.\n\nPer 1,000 records:\n\n- Vendor A: Charges $400 and correctly processes 800 records. - Vendor B: Charges $300 and correctly processes 600 records.",
      "scenarioTable": null,
      "question": "Which vendor offers the lower total processing cost per 1,000 records, including correction costs?",
      "options": {
        "A": "Vendor B, by $100, because its fee is $100 lower per 1,000 records.",
        "B": "Vendor A, by $100, because its total including fixes is $600 against $700.",
        "C": "Neither, because both cost $0.50 per correct record.",
        "D": "Vendor A, by $200, because it leaves 200 fewer records to fix."
      },
      "correct": "B",
      "whyCorrect": "At a common volume of 1,000 records, the full cost is the fee plus the cost of fixing every incorrect record.",
      "solutionSteps": [
        "Incorrect records = 1,000 − 800 = 200, so fixes = 200 × $1 = $200.",
        "Total = $400 + $200 = $600.",
        "Incorrect records = 1,000 − 600 = 400, so fixes = 400 × $1 = $400.",
        "Total = $300 + $400 = $700.",
        "Difference = 700 − 600 = $100 in favour of Vendor A."
      ],
      "shortcut": "B saves $100 on the fee but leaves 200 more errors, which cost $200 to fix. Net: A is cheaper by $100.",
      "distractors": {
        "A": "Compares fees only. The $100 fee gap is cancelled out and reversed by the extra fixes.",
        "C": "400 ÷ 800 and 300 ÷ 600 are both $0.50, but that ratio ignores the fix cost, which differs between the vendors.",
        "D": "Counts only the fix saving ($200) and forgets that A's fee is $100 higher.",
        "B": "Correct: at a common volume of 1,000 records, the full cost is the fee plus the cost of fixing every incorrect record."
      }
    },
    {
      "id": 54,
      "category": "Comparative Decision Scenarios",
      "difficulty": "Medium",
      "topicFocus": "Comparative Decisions · Vendors at a common volume",
      "concepts": [
        "Vendors at a common volume",
        "Cost per record"
      ],
      "scenario": "A company is reviewing two data-processing vendors before renewing its service contract. The procurement team wants to identify which vendor offers the lower processing cost per record.\n\nVendor X's invoice is $27,000 for a quarter, covering 9,000 records. Vendor Y's invoice is $8,000 for one month, covering 2,500 records.",
      "scenarioTable": null,
      "question": "Which vendor costs less per record?",
      "options": {
        "A": "Vendor Y, because $8,000 is lower than $27,000.",
        "B": "Vendor Y, because X's $9,000 a month exceeds Y's $8,000.",
        "C": "Neither, because the invoices cover different periods and cannot be compared.",
        "D": "Vendor X, by $0.20 per record, because $3.00 is below $3.20."
      },
      "correct": "D",
      "whyCorrect": "Cost per record puts both vendors on the same basis, whatever the billing period or the volume.",
      "solutionSteps": [
        "Vendor X: 27,000 ÷ 9,000 = $3.00 per record.",
        "Vendor Y: 8,000 ÷ 2,500 = $3.20 per record.",
        "3.20 − 3.00 = $0.20 in favour of Vendor X."
      ],
      "shortcut": "27 ÷ 9 = 3, and 80 ÷ 25 = 3.2.",
      "distractors": {
        "A": "Compares two invoice totals that cover different periods and different volumes.",
        "B": "Converts X to a monthly $9,000 but ignores that X also processes more records per month (3,000 against 2,500).",
        "C": "Over-cautious. The periods differ, but a per-record rate removes that difference, so the comparison is valid.",
        "D": "Correct: cost per record puts both vendors on the same basis, whatever the billing period or the volume."
      }
    },
    {
      "id": 55,
      "category": "Comparative Decision Scenarios",
      "difficulty": "Medium",
      "topicFocus": "Comparative Decisions · Speed vs accuracy",
      "concepts": [
        "Speed vs accuracy",
        "Total cost"
      ],
      "scenario": "Per 1,000 claims, Tool X takes 2 operator-hours at $20 per hour and produces 20 errors. Tool Y takes 2.5 operator-hours at the same rate and produces 5 errors. Each error costs $50 to fix.",
      "scenarioTable": null,
      "question": "Which tool has the lower total cost per 1,000 claims?",
      "options": {
        "A": "Tool Y, by $740, because its total of $300 is below X's $1,040.",
        "B": "Tool X, because it is cheaper by $10 in operator cost.",
        "C": "Tool Y, by $750, because it has $250 of fixes against $1,000.",
        "D": "Tool Y, by $790, because X's $1,040 exceeds Y's $250 in fixes."
      },
      "correct": "A",
      "whyCorrect": "X is faster by half an operator-hour, but the 15 additional errors cost $750 to fix. That outweighs X's $10 operator-cost saving, leaving Y cheaper by $740.",
      "solutionSteps": [
        "Operator cost = 2 × $20 = $40.",
        "Errors cost 20 × $50 = $1,000.",
        "Total = $40 + $1,000 = $1,040.",
        "Operator cost = 2.5 × $20 = $50.",
        "Errors cost 5 × $50 = $250.",
        "Total = $50 + $250 = $300.",
        "Difference = 1,040 − 300 = $740 in favour of Tool Y."
      ],
      "shortcut": "X saves half an operator-hour ($10), but Y avoids 15 errors worth $750. Net saving with Y = 750 − 10 = $740.",
      "distractors": {
        "B": "Compares operator cost only and treats the lower running cost as decisive.",
        "C": "Compares fix costs only and forgets that Y's operator cost is $10 higher.",
        "D": "Compares X's total ($1,040) with Y's fix cost alone ($250). That is not like for like.",
        "A": "Correct: X is faster by half an operator-hour, but the 15 additional errors cost $750 to fix. That outweighs X's $10 operator-cost saving, leaving Y cheaper by $740."
      }
    },
    {
      "id": 56,
      "category": "Comparative Decision Scenarios",
      "difficulty": "Hard",
      "topicFocus": "Comparative Decisions · Unfair comparison",
      "concepts": [
        "Unfair comparison",
        "Interpretation"
      ],
      "scenario": "Vendor A made 3 errors on 60 simple invoices. Vendor B made 12 errors on 200 mixed-complexity invoices.",
      "scenarioTable": null,
      "question": "Which conclusion is best supported?",
      "options": {
        "A": "Vendor A is better, because 5% is lower than 6% on the same measure.",
        "B": "Vendor B is better, because it handled 200 invoices against 60.",
        "C": "Neither is shown to be better, because the rates come from invoices of different complexity.",
        "D": "Vendor A is better, because scaled to 200 invoices it makes 10 errors, not 12."
      },
      "correct": "C",
      "whyCorrect": "The rates are calculated correctly, but they measure performance on different kinds of work, so they cannot rank the vendors.",
      "solutionSteps": [
        "Vendor A's rate = 3 ÷ 60 = 5%.",
        "Vendor B's rate = 12 ÷ 200 = 6%.",
        "The two sets contain different numbers of invoices, but that alone does not make the comparison unfair. An error rate already adjusts for how many invoices were processed.",
        "The real problem is complexity. Vendor A's 5% comes only from simple invoices, which are the easiest to process. Vendor B's 6% comes from a mix that includes harder invoices. A could be much worse than 5% on complex invoices, and B could be much better than 6% on simple ones.",
        "So the 1-percentage-point gap may reflect the difference in invoice complexity rather than the vendors' actual performance. No reliable conclusion about which vendor performs better overall can be drawn from these figures alone."
      ],
      "shortcut": "dividing by the number of invoices removes the difference in size. Ask next whether both vendors faced the same kind of work. Division cannot fix a difference in difficulty.",
      "distractors": {
        "A": "Treats the two rates as the same measure. A's rate comes from simple invoices only, so it is not comparable with B's rate on a mixed set.",
        "B": "Confuses volume with quality. A larger set makes B's own rate more stable, but it does not make B the more accurate vendor.",
        "D": "Scaling A's errors to 200 invoices handles the size difference, but 10 expected errors still assumes A would perform on mixed-complexity invoices as it did on simple ones. That is the same difficulty gap in a different form.",
        "C": "Correct: the rates are calculated correctly, but they measure performance on different kinds of work, so they cannot rank the vendors."
      }
    },
    {
      "id": 57,
      "category": "Comparative Decision Scenarios",
      "difficulty": "Medium",
      "topicFocus": "Comparative Decisions · Speed vs accuracy",
      "concepts": [
        "Speed vs accuracy",
        "Break-even error cost"
      ],
      "scenario": "A company is evaluating two automated case-processing systems before selecting one for its next 100-case batch. System F costs $2 less per case than System G but produces 1 more error per 100 cases. The company must pay to correct each error.",
      "scenarioTable": null,
      "question": "What is the highest correction cost per error at which choosing System F would still be no more expensive than System G?",
      "options": {
        "A": "$2 per error, because the saving is $2 per case.",
        "B": "$200 per error, because 100 cases save $200 against one extra error.",
        "C": "$400 per error, because both systems' 100 cases are counted.",
        "D": "$1 per error, because one extra error is spread over 100 cases."
      },
      "correct": "B",
      "whyCorrect": "The break-even is the point where the saving over 100 cases equals the cost of the one extra error.",
      "solutionSteps": [
        "Take a common volume of 100 cases.",
        "F's saving = 100 × $2 = $200.",
        "F's extra cost = 1 extra error × E.",
        "F is no more expensive when E ≤ $200."
      ],
      "shortcut": "every 100 cases, F's $200 saving pays for exactly one extra error. An error costing more than $200 reverses the decision.",
      "distractors": {
        "A": "Treats the per-case saving as the per-error limit, mixing two different bases (per case and per error).",
        "C": "Doubles the saving by counting the 100 cases of each system, when the saving applies to one volume.",
        "D": "Divides by 100 instead of multiplying. The extra error is not \"spread\", it is compared with the total saving.",
        "B": "Correct: the break-even is the point where the saving over 100 cases equals the cost of the one extra error."
      }
    },
    {
      "id": 58,
      "category": "Comparative Decision Scenarios",
      "difficulty": "Medium",
      "topicFocus": "Comparative Decisions · Risk and business impact",
      "concepts": [
        "Risk and business impact",
        "Looks quantitative, is not"
      ],
      "scenario": "A team has 4 review hours a week. Task A: 120 internal brainstorm drafts, saving 10 hours. Task B: one public legal notice, saving 2 hours.",
      "scenarioTable": null,
      "question": "Which task must receive priority human review before its output is released?",
      "options": {
        "A": "Task A, because its 10-hour saving means errors there would waste more value.",
        "B": "Neither, because both outputs come from the same AI with the same error rate.",
        "C": "Task A, because 120 drafts give more chances for errors than one notice.",
        "D": "Task B, because stakes, reversibility, audience and regulatory exposure are all higher."
      },
      "correct": "D",
      "whyCorrect": "Every criterion points to the same task, and the answer does not depend on how many hours the team happens to have.",
      "solutionSteps": [
        "Separate benefit from risk. Hours saved and the number of drafts describe the benefit and the volume. They say nothing about what an error would cost.",
        "Screen each task on the four review criteria.",
        "Task A is low on all four, and Task B is high on all four.",
        "The task that must be checked before release is the one where an undetected error costs the most, which is Task B."
      ],
      "shortcut": "the stem offers hours, counts and a saving for each task, but none of them decides the answer. The deciding factor is consequence: review priority follows stakes, reversibility, audience and regulatory exposure, not the benefit gained or the number of items. Make Task A save 100 hours instead of 10, or make the notice save 20 hours instead of 2, and the answer is unchanged.",
      "distractors": {
        "A": "Treats the benefit gained as a measure of risk. Hours saved says nothing about the cost of an error.",
        "B": "An equal error rate does not mean equal priority. Priority follows the consequence of an error, and the two consequences are very different.",
        "C": "Confuses the number of items with the severity of an error. Many low-stakes drafts are still low stakes.",
        "D": "Correct: every criterion points to the same task, and the answer does not depend on how many hours the team happens to have."
      }
    },
    {
      "id": 59,
      "category": "Comparative Decision Scenarios",
      "difficulty": "Medium",
      "topicFocus": "Comparative Decisions · Budget plan",
      "concepts": [
        "Budget plan",
        "Looks quantitative, is not"
      ],
      "scenario": "AI recommends 3 hires at $90,000 each against a $300,000 budget. Leadership froze hiring in a meeting last week, and the AI was never given that information.",
      "scenarioTable": null,
      "question": "What decides whether the plan can be approved?",
      "options": {
        "A": "The freeze, because the model could not see an input decided outside its window.",
        "B": "The $270,000 total, because it is under the $300,000 budget.",
        "C": "The growth projection, because it drives the headcount.",
        "D": "A recalculation by code, because the figures may contain errors."
      },
      "correct": "A",
      "whyCorrect": "The plan fails on a missing, non-numeric input, not on its arithmetic.",
      "solutionSteps": [
        "Check the numbers: $270,000 is under $300,000, so the budget fits.",
        "Window test: could everything this step needs be put in front of the model? The freeze is not in the information the AI was given.",
        "A model may still produce a recommendation based on the incomplete information it received, without accounting for the missing hiring freeze.",
        "So the decision to proceed stays with a person who knows about the freeze."
      ],
      "shortcut": "the arithmetic is already correct (3 × $90,000 = $270,000, under $300,000). The step is a judgment step because a needed input, the freeze, was decided in a meeting and never entered the model's context. Raise the budget to $3 million and the freeze still decides.",
      "distractors": {
        "B": "Treats \"under budget\" as approval. Fitting the budget is necessary, not sufficient.",
        "C": "The projection may be sound. A correct projection does not make a hiring recommendation valid during a freeze.",
        "D": "Recalculating would only confirm figures that are already right. It cannot reveal a missing input.",
        "A": "Correct: the plan fails on a missing, non-numeric input, not on its arithmetic."
      }
    },
    {
      "id": 60,
      "category": "Comparative Decision Scenarios",
      "difficulty": "Medium",
      "topicFocus": "Comparative Decisions · Risk and business impact",
      "concepts": [
        "Risk and business impact",
        "Looks quantitative, is not"
      ],
      "scenario": "To avoid a $5,000 approved-route fee, a team swaps customer names for codes like \"Customer 17\" but keeps the code-to-name sheet.",
      "scenarioTable": null,
      "question": "Can the saving be justified?",
      "options": {
        "A": "Yes, because removing names moves the data to the green tier.",
        "B": "Yes, because pattern-only tasks never need an approved route.",
        "C": "No, because data traceable through the mapping sheet keeps its original tier.",
        "D": "No, because redaction is never permitted for customer data."
      },
      "correct": "C",
      "whyCorrect": "Swapping names for codes only lowers the tier if the mapping can no longer trace back to a person.",
      "solutionSteps": [
        "Classify the data: customer identifiers sit above the green tier.",
        "Ask whether the task needs the identifiers or only the pattern. If only the pattern, redaction is the right first move.",
        "After replacing names with codes, ask one more question: does anyone still hold the list that maps the codes back to people?",
        "Yes, the team kept the sheet. The data is pseudonymized, not anonymized, so it keeps its original tier and the approved-route question still applies."
      ],
      "shortcut": "the $5,000 is the lure. The deciding factor is whether the data is still identifiable. A saving of $50,000 would not change that.",
      "distractors": {
        "A": "Treats relabelling as anonymization. The tier drops only when identification is truly no longer possible.",
        "B": "A pattern-only task can use redaction, but that does not remove the need for an approved route while the mapping still exists.",
        "D": "Overstates the rule. Redaction is a useful control; it simply does not work when the mapping is kept.",
        "C": "Correct: swapping names for codes only lowers the tier if the mapping can no longer trace back to a person."
      }
    }
  ]
};
