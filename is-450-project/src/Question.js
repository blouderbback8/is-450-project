import React, { useState, useEffect, useRef } from 'react';

// Define the list of backgrounds and corresponding audio files
const files = [
    'background1.jpg',
    'background2.jpg',
    'background3.jpg',
    'background4.jpg',
    'background5.jpg',
    'background6.jpg',
    'background7.jpg',
    'background8.jpg',
    'background9.jpg',
    'background10.jpg'
];

const Questions = [
    // Question 1
    {
        text: "What is the purpose of a project charter?",
        options: [
            "To authorize the project",
            "To document project risks",
            "To define project scope",
            "To create the project schedule"
        ],
        correctOption: 0
    },
    // Question 2
    {
        text: "Which project management process involves developing a detailed project scope statement?",
        options: [
            "Initiating",
            "Planning",
            "Executing",
            "Closing"
        ],
        correctOption: 1
    },
    // Question 3
    {
        text: "What is the primary purpose of the project stakeholder register?",
        options: [
            "To identify project constraints",
            "To document project assumptions",
            "To identify and categorize project stakeholders",
            "To develop the project schedule"
        ],
        correctOption: 2
    },
    // Question 4
    {
        text: "During which phase of the project life cycle is the project scope statement developed?",
        options: [
            "Initiating",
            "Planning",
            "Executing",
            "Closing"
        ],
        correctOption: 1
    },
    // Question 5
    {
        text: "Which tool or technique is used in the Plan Scope Management process?",
        options: [
            "Mind mapping",
            "SWOT analysis",
            "Expert judgment",
            "Variance analysis"
        ],
        correctOption: 2
    },
    // Question 6
    {
        text: "What is the purpose of the WBS (Work Breakdown Structure)?",
        options: [
            "To create the project schedule",
            "To document project risks",
            "To decompose project deliverables into smaller, more manageable components",
            "To identify project assumptions"
        ],
        correctOption: 2
    },
    // Question 7
    {
        text: "What is the purpose of the project schedule baseline?",
        options: [
            "To document project constraints",
            "To measure and monitor project performance",
            "To identify project assumptions",
            "To provide a reference point for project progress"
        ],
        correctOption: 3
    },
    // Question 8
    {
        text: "Which process is responsible for defining, preparing, and coordinating all plan components?",
        options: [
            "Plan Scope Management",
            "Plan Schedule Management",
            "Plan Cost Management",
            "Plan Communications Management"
        ],
        correctOption: 3
    },
    // Question 9
    {
        text: "What does the term 'float' or 'slack' refer to in project scheduling?",
        options: [
            "The time a task can be delayed without delaying the project",
            "The time a task is scheduled to start",
            "The time a task takes to complete",
            "The total time available for a project"
        ],
        correctOption: 0
    },
    // Question 10
    {
        text: "In project management, what is the primary purpose of the Change Control Board (CCB)?",
        options: [
            "To develop the project scope statement",
            "To approve or reject changes to the project baselines",
            "To document project assumptions",
            "To measure and monitor project performance"
        ],
        correctOption: 1
    },
    // Question 11
    {
        text: "What is the purpose of a risk register in project management?",
        options: [
            "To identify project assumptions",
            "To document project constraints",
            "To record identified risks and their characteristics",
            "To create the project schedule"
        ],
        correctOption: 2
    },
    // Question 12
    {
        text: "During which process does the project manager obtain the necessary approvals to proceed with project execution?",
        options: [
            "Develop Project Charter",
            "Develop Project Management Plan",
            "Direct and Manage Project Work",
            "Monitor and Control Project Work"
        ],
        correctOption: 0
    },
    // Question 13
    {
        text: "What is the purpose of a stakeholder engagement plan?",
        options: [
            "To define how project resources will be allocated",
            "To document project assumptions",
            "To identify and categorize project stakeholders",
            "To manage and influence stakeholder expectations"
        ],
        correctOption: 3
    },
    // Question 14
    {
        text: "What is the primary output of the Develop Project Team process?",
        options: [
            "Project staff assignments",
            "Team performance assessments",
            "Team charters",
            "Resource calendars"
        ],
        correctOption: 0
    },
    // Question 15
    {
        text: "Which process involves determining, documenting, and managing stakeholder needs and requirements to meet project objectives?",
        options: [
            "Identify Stakeholders",
            "Plan Stakeholder Engagement",
            "Manage Stakeholder Engagement",
            "Monitor Stakeholder Engagement"
        ],
        correctOption: 2
    },
    // Question 16
    {
        text: "What does the term 'earned value' represent in project management?",
        options: [
            "The budgeted cost of work performed",
            "The actual cost of work performed",
            "The value of work actually performed",
            "The planned value of work to be performed"
        ],
        correctOption: 2
    },
    // Question 17
    {
        text: "What is the primary purpose of the Control Quality process?",
        options: [
            "To validate that project scope was completed successfully",
            "To verify that project deliverables meet specified requirements",
            "To approve changes to project baselines",
            "To audit project financial records"
        ],
        correctOption: 1
    },
    // Question 18
    {
        text: "Which document provides the project manager with the authority to apply resources to project activities?",
        options: [
            "Project Charter",
            "Project Management Plan",
            "Work Breakdown Structure (WBS)",
            "Risk Register"
        ],
        correctOption: 0
    },
    // Question 19
    {
        text: "What is the primary purpose of the Plan Procurement Management process?",
        options: [
            "To create the project schedule",
            "To determine the appropriate project procurement strategy",
            "To manage and influence stakeholder expectations",
            "To define how project resources will be allocated"
        ],
        correctOption: 1
    },
    // Question 20
    {
        text: "Which type of power is associated with a project manager's formal authority within the organizational structure?",
        options: [
            "Referent power",
            "Expert power",
            "Legitimate power",
            "Reward power"
        ],
        correctOption: 2
    },
    // Question 21
    {
        text: "What is the primary purpose of the Perform Integrated Change Control process?",
        options: [
            "Approve or reject changes to project baselines",
            "Develop the project scope statement",
            "Create a communication plan",
            "Sequence project activities"
        ],
        correctOption: 0
    },
    // Question 22
    {
        text: "During the Close Procurements process, what is the primary objective?",
        options: [
            "Selecting vendors",
            "Finalizing all project contracts",
            "Monitoring project risks",
            "Closing out project activities"
        ],
        correctOption: 1
    },
    // Question 23
    {
        text: "What is the main benefit of using a Responsibility Assignment Matrix (RAM) in project management?",
        options: [
            "Identify project risks",
            "Clarify team member roles and responsibilities",
            "Develop project schedule",
            "Determine project budget"
        ],
        correctOption: 1
    },
    // Question 24
    {
        text: "During the Control Procurements process, what is the primary focus?",
        options: [
            "Managing stakeholder expectations",
            "Closing out procurement contracts",
            "Selecting vendors",
            "Planning procurement activities"
        ],
        correctOption: 1
    },
    // Question 25
    {
        text: "What is the purpose of the Plan Communications Management process in project management?",
        options: [
            "Define how project resources will be allocated",
            "Establish a communication plan",
            "Document project assumptions",
            "Monitor project work progress"
        ],
        correctOption: 1
    },
    // Question 26
    {
        text: "Which risk response strategy involves taking advantage of an opportunity if it occurs?",
        options: [
            "Mitigation",
            "Acceptance",
            "Exploitation",
            "Avoidance"
        ],
        correctOption: 2
    },
    // Question 27
    {
        text: "During the Develop Project Team process, what is the focus of team-building activities?",
        options: [
            "Improving individual performance",
            "Resolving conflicts",
            "Enhancing team dynamics and collaboration",
            "Monitoring project progress"
        ],
        correctOption: 2
    },
    // Question 28
    {
        text: "What is the purpose of the Critical Path Method (CPM) in project management?",
        options: [
            "Identify project risks",
            "Determine project schedule flexibility",
            "Sequence project activities",
            "Analyze project costs"
        ],
        correctOption: 2
    },
    // Question 29
    {
        text: "What does the term 'SWOT' stand for in project management?",
        options: [
            "Schedule, Work Breakdown Structure, Objectives, Timeline",
            "Strengths, Weaknesses, Opportunities, Threats",
            "Stakeholders, Work Packages, Objectives, Tasks",
            "Scope, Work Breakdown Structure, Outcomes, Timeline"
        ],
        correctOption: 1
    },
    // Question 30
    {
        text: "In project management, what is the primary purpose of the Lessons Learned Documentation?",
        options: [
            "Identify project risks",
            "Document project assumptions",
            "Capture and share knowledge from project experiences",
            "Develop the project scope statement"
        ],
        correctOption: 2
    },
    // Question 31
    {
        text: "What is the primary purpose of the Risk Register in project management?",
        options: [
            "Identify project assumptions",
            "Document project constraints",
            "Record identified risks and their characteristics",
            "Create the project schedule"
        ],
        correctOption: 2
    },

    // Question 32
    {
        text: "During which project management process does the team develop the project scope statement?",
        options: [
            "Initiating",
            "Planning",
            "Executing",
            "Closing"
        ],
        correctOption: 1
    },

    // Question 33
    {
        text: "In project scheduling, what does the term 'float' or 'slack' refer to?",
        options: [
            "The time a task can be delayed without delaying the project",
            "The time a task is scheduled to start",
            "The time a task takes to complete",
            "The total time available for a project"
        ],
        correctOption: 0
    },

    // Question 34
    {
        text: "What is the primary purpose of the Control Quality process in project management?",
        options: [
            "Validate that project scope was completed successfully",
            "Verify that project deliverables meet specified requirements",
            "Approve changes to project baselines",
            "Audit project financial records"
        ],
        correctOption: 1
    },

    // Question 35
    {
        text: "During which project management process does the project manager obtain the necessary approvals to proceed with project execution?",
        options: [
            "Develop Project Charter",
            "Develop Project Management Plan",
            "Direct and Manage Project Work",
            "Monitor and Control Project Work"
        ],
        correctOption: 0
    },

    // Question 36
    {
        text: "What is the main benefit of using a Responsibility Assignment Matrix (RAM) in project management?",
        options: [
            "Identify project risks",
            "Clarify team member roles and responsibilities",
            "Develop project schedule",
            "Determine project budget"
        ],
        correctOption: 1
    },

    // Question 37
    {
        text: "In project management, what does the term 'earned value' represent?",
        options: [
            "The budgeted cost of work performed",
            "The actual cost of work performed",
            "The value of work actually performed",
            "The planned value of work to be performed"
        ],
        correctOption: 2
    },

    // Question 38
    {
        text: "What is the primary purpose of the Perform Integrated Change Control process in project management?",
        options: [
            "Approve or reject changes to project baselines",
            "Develop the project scope statement",
            "Create a communication plan",
            "Sequence project activities"
        ],
        correctOption: 0
    },

    // Question 39
    {
        text: "During the Close Procurements process, what is the primary objective?",
        options: [
            "Selecting vendors",
            "Finalizing all project contracts",
            "Monitoring project risks",
            "Closing out project activities"
        ],
        correctOption: 1
    },

    // Question 40
    {
        text: "What does the term 'SWOT' stand for in project management?",
        options: [
            "Schedule, Work Breakdown Structure, Objectives, Timeline",
            "Strengths, Weaknesses, Opportunities, Threats",
            "Stakeholders, Work Packages, Objectives, Tasks",
            "Scope, Work Breakdown Structure, Outcomes, Timeline"
        ],
        correctOption: 1
    },

    // Question 41
    {
        text: "What is the purpose of the Communication Management Plan in project management?",
        options: [
            "Identify project assumptions",
            "Establish a communication plan",
            "Monitor project work progress",
            "Approve changes to project baselines"
        ],
        correctOption: 1
    },

    // Question 42
    {
        text: "During which project management process is the Project Scope Statement developed?",
        options: [
            "Initiating",
            "Planning",
            "Executing",
            "Closing"
        ],
        correctOption: 1
    },

    // Question 43
    {
        text: "What is the primary focus of team-building activities during the Develop Project Team process?",
        options: [
            "Improving individual performance",
            "Resolving conflicts",
            "Enhancing team dynamics and collaboration",
            "Monitoring project progress"
        ],
        correctOption: 2
    },

    // Question 44
    {
        text: "In project management, what does the term 'SWOT' stand for?",
        options: [
            "Schedule, Work Breakdown Structure, Objectives, Timeline",
            "Strengths, Weaknesses, Opportunities, Threats",
            "Stakeholders, Work Packages, Objectives, Tasks",
            "Scope, Work Breakdown Structure, Outcomes, Timeline"
        ],
        correctOption: 1
    },

    // Question 45
    {
        text: "What is the primary output of the Develop Project Team process?",
        options: [
            "Project staff assignments",
            "Team performance assessments",
            "Team charters",
            "Resource calendars"
        ],
        correctOption: 0
    },

    // Question 46
    {
        text: "During the Control Procurements process, what is the primary focus?",
        options: [
            "Managing stakeholder expectations",
            "Closing out procurement contracts",
            "Selecting vendors",
            "Planning procurement activities"
        ],
        correctOption: 1
    },

    // Question 47
    {
        text: "Which risk response strategy involves taking advantage of an opportunity if it occurs?",
        options: [
            "Mitigation",
            "Acceptance",
            "Exploitation",
            "Avoidance"
        ],
        correctOption: 2
    },

    // Question 48
    {
        text: "What is the main benefit of using a Responsibility Assignment Matrix (RAM) in project management?",
        options: [
            "Identify project risks",
            "Clarify team member roles and responsibilities",
            "Develop project schedule",
            "Determine project budget"
        ],
        correctOption: 1
    },

    // Question 49
    {
        text: "During the Close Procurements process, what is the primary objective?",
        options: [
            "Selecting vendors",
            "Finalizing all project contracts",
            "Monitoring project risks",
            "Closing out project activities"
        ],
        correctOption: 1
    },

    // Question 50
    {
        text: "What is the primary purpose of the Lessons Learned Documentation in project management?",
        options: [
            "Identify project risks",
            "Document project assumptions",
            "Capture and share knowledge from project experiences",
            "Develop the project scope statement"
        ],
        correctOption: 2
    },

    // Question 51
    {
        text: "What is the primary objective of the Plan Risk Responses process in project management?",
        options: [
            "Identify project assumptions",
            "Establish risk categories",
            "Develop strategies to address potential risks",
            "Close out project risks"
        ],
        correctOption: 2
    },

    // Question 52
    {
        text: "During the Control Quality process, what is the main focus?",
        options: [
            "Validate that project scope was completed successfully",
            "Verify that project deliverables meet specified requirements",
            "Approve changes to project baselines",
            "Audit project financial records"
        ],
        correctOption: 1
    },

    // Question 53
    {
        text: "In project management, what does the term 'earned value' represent?",
        options: [
            "The budgeted cost of work performed",
            "The actual cost of work performed",
            "The value of work actually performed",
            "The planned value of work to be performed"
        ],
        correctOption: 2
    },

    // Question 54
    {
        text: "What is the purpose of the Stakeholder Engagement Plan in project management?",
        options: [
            "To define how project resources will be allocated",
            "To document project assumptions",
            "To identify and categorize project stakeholders",
            "To manage and influence stakeholder expectations"
        ],
        correctOption: 3
    },

    // Question 55
    {
        text: "During which process does the project manager obtain the necessary approvals to proceed with project execution?",
        options: [
            "Develop Project Charter",
            "Develop Project Management Plan",
            "Direct and Manage Project Work",
            "Monitor and Control Project Work"
        ],
        correctOption: 0
    },

    // Question 56
    {
        text: "What is the purpose of the Risk Register in project management?",
        options: [
            "To identify project assumptions",
            "To document project constraints",
            "To record identified risks and their characteristics",
            "To create the project schedule"
        ],
        correctOption: 2
    },

    // Question 57
    {
        text: "Which type of power is associated with a project manager's formal authority within the organizational structure?",
        options: [
            "Referent power",
            "Expert power",
            "Legitimate power",
            "Reward power"
        ],
        correctOption: 2
    },

    // Question 58
    {
        text: "What is the primary purpose of the Perform Integrated Change Control process?",
        options: [
            "Approve or reject changes to project baselines",
            "Develop the project scope statement",
            "Create a communication plan",
            "Sequence project activities"
        ],
        correctOption: 0
    },

    // Question 59
    {
        text: "During the Close Procurements process, what is the main benefit?",
        options: [
            "Selecting vendors",
            "Finalizing all project contracts",
            "Monitoring project risks",
            "Closing out project activities"
        ],
        correctOption: 1
    },

    // Question 60
    {
        text: "What is the purpose of the Control Communications process in project management?",
        options: [
            "Define how project resources will be allocated",
            "Establish a communication plan",
            "Document project assumptions",
            "Monitor project work progress"
        ],
        correctOption: 3
    },
    // Question 61
    {
        text: "During the Plan Stakeholder Engagement process, what is the focus?",
        options: [
            "Define project scope",
            "Identify and categorize project stakeholders",
            "Develop project schedule",
            "Approve project budget"
        ],
        correctOption: 1
    },

    // Question 62
    {
        text: "What is the purpose of the Project Management Plan in project management?",
        options: [
            "To identify project constraints",
            "To document project assumptions",
            "To define project scope",
            "To provide a reference point for project progress"
        ],
        correctOption: 3
    },

    // Question 63
    {
        text: "In project scheduling, what does the term 'float' or 'slack' refer to?",
        options: [
            "The time a task can be delayed without delaying the project",
            "The time a task is scheduled to start",
            "The time a task takes to complete",
            "The total time available for a project"
        ],
        correctOption: 0
    },

    // Question 64
    {
        text: "What is the main benefit of using a Responsibility Assignment Matrix (RAM) in project management?",
        options: [
            "Identify project risks",
            "Clarify team member roles and responsibilities",
            "Develop project schedule",
            "Determine project budget"
        ],
        correctOption: 1
    },

    // Question 65
    {
        text: "During the Control Procurements process, what is the primary focus?",
        options: [
            "Managing stakeholder expectations",
            "Closing out procurement contracts",
            "Selecting vendors",
            "Planning procurement activities"
        ],
        correctOption: 1
    },

    // Question 66
    {
        text: "Which project management process involves developing a detailed project scope statement?",
        options: [
            "Initiating",
            "Planning",
            "Executing",
            "Closing"
        ],
        correctOption: 1
    },

    // Question 67
    {
        text: "What is the purpose of the Stakeholder Engagement Plan in project management?",
        options: [
            "To define how project resources will be allocated",
            "To document project assumptions",
            "To identify and categorize project stakeholders",
            "To manage and influence stakeholder expectations"
        ],
        correctOption: 3
    },

    // Question 68
    {
        text: "During which phase of the project life cycle is the project scope statement developed?",
        options: [
            "Initiating",
            "Planning",
            "Executing",
            "Closing"
        ],
        correctOption: 1
    },

    // Question 69
    {
        text: "What is the purpose of the Project Schedule Baseline in project management?",
        options: [
            "To document project constraints",
            "To measure and monitor project performance",
            "To identify project assumptions",
            "To provide a reference point for project progress"
        ],
        correctOption: 3
    },

    // Question 70
    {
        text: "What is the primary output of the Develop Project Team process?",
        options: [
            "Project staff assignments",
            "Team performance assessments",
            "Team charters",
            "Resource calendars"
        ],
        correctOption: 0
    },

    // Question 71
    {
        text: "In project management, what is the purpose of the Lessons Learned Documentation?",
        options: [
            "Identify project risks",
            "Document project assumptions",
            "Capture and share knowledge from project experiences",
            "Develop the project scope statement"
        ],
        correctOption: 2
    },

    // Question 72
    {
        text: "During the Develop Project Team process, what is the focus of team-building activities?",
        options: [
            "Improving individual performance",
            "Resolving conflicts",
            "Enhancing team dynamics and collaboration",
            "Monitoring project progress"
        ],
        correctOption: 2
    },

    // Question 73
    {
        text: "What is the purpose of the Critical Path Method (CPM) in project management?",
        options: [
            "Identify project risks",
            "Determine project schedule flexibility",
            "Sequence project activities",
            "Analyze project costs"
        ],
        correctOption: 2
    },

    // Question 74
    {
        text: "What does the term 'SWOT' stand for in project management?",
        options: [
            "Schedule, Work Breakdown Structure, Objectives, Timeline",
            "Strengths, Weaknesses, Opportunities, Threats",
            "Stakeholders, Work Packages, Objectives, Tasks",
            "Scope, Work Breakdown Structure, Outcomes, Timeline"
        ],
        correctOption: 1
    },

    // Question 75
    {
        text: "What is the purpose of the Plan Communications Management process in project management?",
        options: [
            "Define how project resources will be allocated",
            "Establish a communication plan",
            "Document project assumptions",
            "Monitor project work progress"
        ],
        correctOption: 1
    },

    // Question 76
    {
        text: "Which risk response strategy involves taking advantage of an opportunity if it occurs?",
        options: [
            "Mitigation",
            "Acceptance",
            "Exploitation",
            "Avoidance"
        ],
        correctOption: 2
    },

    // Question 77
    {
        text: "What is the main benefit of using a Responsibility Assignment Matrix (RAM) in project management?",
        options: [
            "Identify project risks",
            "Clarify team member roles and responsibilities",
            "Develop project schedule",
            "Determine project budget"
        ],
        correctOption: 1
    },

    // Question 78
    {
        text: "During the Control Procurements process, what is the primary focus?",
        options: [
            "Managing stakeholder expectations",
            "Closing out procurement contracts",
            "Selecting vendors",
            "Planning procurement activities"
        ],
        correctOption: 1
    },

    // Question 79
    {
        text: "What is the purpose of the Plan Procurement Management process?",
        options: [
            "To create the project schedule",
            "To determine the appropriate project procurement strategy",
            "To manage and influence stakeholder expectations",
            "To define how project resources will be allocated"
        ],
        correctOption: 1
    },

    // Question 80
    {
        text: "Which type of power is associated with a project manager's formal authority within the organizational structure?",
        options: [
            "Referent power",
            "Expert power",
            "Legitimate power",
            "Reward power"
        ],
        correctOption: 2
    },

    // Question 81
    {
        text: "During the Close Procurements process, what is the primary objective?",
        options: [
            "Selecting vendors",
            "Finalizing all project contracts",
            "Monitoring project risks",
            "Closing out project activities"
        ],
        correctOption: 1
    },

    // Question 82
    {
        text: "What is the purpose of the Perform Integrated Change Control process?",
        options: [
            "Approve or reject changes to project baselines",
            "Develop the project scope statement",
            "Create a communication plan",
            "Sequence project activities"
        ],
        correctOption: 0
    },

    // Question 83
    {
        text: "What is the primary purpose of the Control Quality process?",
        options: [
            "To validate that project scope was completed successfully",
            "To verify that project deliverables meet specified requirements",
            "To approve changes to project baselines",
            "To audit project financial records"
        ],
        correctOption: 1
    },

    // Question 84
    {
        text: "Which document provides the project manager with the authority to apply resources to project activities?",
        options: [
            "Project Charter",
            "Project Management Plan",
            "Work Breakdown Structure (WBS)",
            "Risk Register"
        ],
        correctOption: 0
    },

    // Question 85
    {
        text: "What is the purpose of a risk register in project management?",
        options: [
            "To identify project assumptions",
            "To document project constraints",
            "To record identified risks and their characteristics",
            "To create the project schedule"
        ],
        correctOption: 2
    },

    // Question 86
    {
        text: "During which process does the project manager obtain the necessary approvals to proceed with project execution?",
        options: [
            "Develop Project Charter",
            "Develop Project Management Plan",
            "Direct and Manage Project Work",
            "Monitor and Control Project Work"
        ],
        correctOption: 0
    },

    // Question 87
    {
        text: "What is the purpose of a stakeholder engagement plan?",
        options: [
            "To define how project resources will be allocated",
            "To document project assumptions",
            "To identify and categorize project stakeholders",
            "To manage and influence stakeholder expectations"
        ],
        correctOption: 3
    },

    // Question 88
    {
        text: "What is the primary output of the Develop Project Team process?",
        options: [
            "Project staff assignments",
            "Team performance assessments",
            "Team charters",
            "Resource calendars"
        ],
        correctOption: 0
    },

    // Question 89
    {
        text: "Which process involves determining, documenting, and managing stakeholder needs and requirements to meet project objectives?",
        options: [
            "Identify Stakeholders",
            "Plan Stakeholder Engagement",
            "Manage Stakeholder Engagement",
            "Monitor Stakeholder Engagement"
        ],
        correctOption: 2
    },

    // Question 90
    {
        text: "What does the term 'earned value' represent in project management?",
        options: [
            "The budgeted cost of work performed",
            "The actual cost of work performed",
            "The value of work actually performed",
            "The planned value of work to be performed"
        ],
        correctOption: 2
    },

    // Question 91
    {
        text: "During the Develop Project Schedule process, what is the main output?",
        options: [
            "Project schedule network diagrams",
            "Resource calendars",
            "Schedule baseline",
            "Activity list"
        ],
        correctOption: 2
    },

    // Question 92
    {
        text: "What is the purpose of the Plan Risk Responses process?",
        options: [
            "To identify project risks",
            "To create a risk management plan",
            "To develop risk response strategies",
            "To document project assumptions"
        ],
        correctOption: 2
    },

    // Question 93
    {
        text: "In project management, what is the primary purpose of the Stakeholder Register?",
        options: [
            "To identify project assumptions",
            "To document project constraints",
            "To record identified risks and their characteristics",
            "To identify and categorize project stakeholders"
        ],
        correctOption: 3
    },

    // Question 94
    {
        text: "What is the main focus of the Monitor and Control Project Work process?",
        options: [
            "Executing project activities",
            "Tracking, reviewing, and regulating project progress and performance",
            "Closing out project activities",
            "Developing the project management plan"
        ],
        correctOption: 1
    },

    // Question 95
    {
        text: "During the Control Risks process, what is the primary goal?",
        options: [
            "Accepting all identified risks",
            "Avoiding all identified risks",
            "Taking advantage of all identified risks",
            "Minimizing the impact and probability of identified risks"
        ],
        correctOption: 3
    },

    // Question 96
    {
        text: "What is the purpose of the Direct and Manage Project Work process?",
        options: [
            "To document project assumptions",
            "To define how project resources will be allocated",
            "To lead and perform the work defined in the project management plan",
            "To monitor project work progress"
        ],
        correctOption: 2
    },

    // Question 97
    {
        text: "During which process is the project management plan developed?",
        options: [
            "Initiating",
            "Planning",
            "Executing",
            "Monitoring and Controlling"
        ],
        correctOption: 1
    },

    // Question 98
    {
        text: "What is the primary purpose of the Control Communications process?",
        options: [
            "Define how project resources will be allocated",
            "Establish a communication plan",
            "Monitor and control project communications",
            "Document project assumptions"
        ],
        correctOption: 2
    },

    // Question 99
    {
        text: "Which type of dependency exists when the start or finish of an activity depends on the start or finish of another external project?",
        options: [
            "Internal dependency",
            "External dependency",
            "Mandatory dependency",
            "Discretionary dependency"
        ],
        correctOption: 1
    },

    // Question 100
    {
        text: "What is the primary purpose of the Validate Scope process?",
        options: [
            "To verify that project deliverables meet specified requirements",
            "To approve changes to project baselines",
            "To audit project financial records",
            "To develop the project scope statement"
        ],
        correctOption: 0
    },

    // Question 101
    {
        text: "How would you resolve conflicts between team members?",
        options: [
            "Communicate and mediate",
            "Ignore the conflict",
            "Escalate to management",
            "Avoid team members"],
        correctOption: 0
    },
    // Question 102
    {
        text: "What steps do you take to ensure project deadlines are met?",
        options: [
            "Create a revised schedule",
            "Extend the deadline",
            "Ignore delays",
            "Reduce project scope"],
        correctOption: 0
    },
    // Question 103
{
    text: "What is the purpose of the Perform Integrated Change Control process?",
    options: [
        "To approve or reject changes to project baselines",
        "To develop the project scope statement",
        "To create a communication plan",
        "To sequence project activities"
    ],
    correctOption: 0
},

// Question 104
{
    text: "What is the primary purpose of the Control Quality process?",
    options: [
        "To validate that project scope was completed successfully",
        "To verify that project deliverables meet specified requirements",
        "To approve changes to project baselines",
        "To audit project financial records"
    ],
    correctOption: 1
},

// Question 105
{
    text: "Which document provides the project manager with the authority to apply resources to project activities?",
    options: [
        "Project Charter",
        "Project Management Plan",
        "Work Breakdown Structure (WBS)",
        "Risk Register"
    ],
    correctOption: 0
},

// Question 106
{
    text: "What is the purpose of a risk register in project management?",
    options: [
        "To identify project assumptions",
        "To document project constraints",
        "To record identified risks and their characteristics",
        "To create the project schedule"
    ],
    correctOption: 2
},

// Question 107
{
    text: "During which process does the project manager obtain the necessary approvals to proceed with project execution?",
    options: [
        "Develop Project Charter",
        "Develop Project Management Plan",
        "Direct and Manage Project Work",
        "Monitor and Control Project Work"
    ],
    correctOption: 0
},

// Question 108
{
    text: "What is the purpose of a stakeholder engagement plan?",
    options: [
        "To define how project resources will be allocated",
        "To document project assumptions",
        "To identify and categorize project stakeholders",
        "To manage and influence stakeholder expectations"
    ],
    correctOption: 3
},

// Question 109
{
    text: "What is the primary output of the Develop Project Team process?",
    options: [
        "Project staff assignments",
        "Team performance assessments",
        "Team charters",
        "Resource calendars"
    ],
    correctOption: 0
},

// Question 110
{
    text: "Which process involves determining, documenting, and managing stakeholder needs and requirements to meet project objectives?",
    options: [
        "Identify Stakeholders",
        "Plan Stakeholder Engagement",
        "Manage Stakeholder Engagement",
        "Monitor Stakeholder Engagement"
    ],
    correctOption: 2
},

// Question 111
{
    text: "What does the term 'earned value' represent in project management?",
    options: [
        "The budgeted cost of work performed",
        "The actual cost of work performed",
        "The value of work actually performed",
        "The planned value of work to be performed"
    ],
    correctOption: 2
},

// Question 112
{
    text: "During the Develop Project Schedule process, what is the main output?",
    options: [
        "Project schedule network diagrams",
        "Resource calendars",
        "Schedule baseline",
        "Activity list"
    ],
    correctOption: 2
},
// Question 113
{
    text: "What is the purpose of the Kickoff Meeting in project management?",
    options: [
        "To formally close the project",
        "To review project progress",
        "To initiate project activities and establish common goals",
        "To monitor project risks"
    ],
    correctOption: 2
},

// Question 114
{
    text: "During the Develop Project Schedule process, what tool or technique is commonly used to visually represent project activities and their dependencies?",
    options: [
        "Activity List",
        "Gantt Chart",
        "Resource Histogram",
        "Network Diagram"
    ],
    correctOption: 1
},

// Question 115
{
    text: "What is the primary purpose of a Work Breakdown Structure (WBS) in project management?",
    options: [
        "To identify project assumptions",
        "To allocate project resources",
        "To decompose project deliverables into smaller, manageable components",
        "To document project constraints"
    ],
    correctOption: 2
},

// Question 116
{
    text: "Which document outlines the project objectives, deliverables, and scope, as well as the roles and responsibilities of project team members?",
    options: [
        "Project Charter",
        "Stakeholder Register",
        "Project Management Plan",
        "Scope Statement"
    ],
    correctOption: 0
},

// Question 117
{
    text: "What is the main focus of the Close Project or Phase process in project management?",
    options: [
        "Approving changes to project baselines",
        "Formally initiating the project",
        "Auditing project financial records",
        "Finalizing all project activities and ensuring project closure"
    ],
    correctOption: 3
},

// Question 118
{
    text: "What is the primary purpose of the Stakeholder Register in project management?",
    options: [
        "To identify project assumptions",
        "To document project constraints",
        "To record identified risks and their characteristics",
        "To identify and categorize project stakeholders"
    ],
    correctOption: 3
},

// Question 119
{
    text: "During which process is the project scope statement developed?",
    options: [
        "Initiating",
        "Planning",
        "Executing",
        "Closing"
    ],
    correctOption: 1
},

// Question 120
{
    text: "What is the main focus of the Perform Integrated Change Control process?",
    options: [
        "Approving or rejecting changes to project baselines",
        "Developing the project scope statement",
        "Creating a communication plan",
        "Sequencing project activities"
    ],
    correctOption: 0
},

// Question 121
{
    text: "Which type of power is associated with a project manager's ability to inspire admiration and respect from team members?",
    options: [
        "Referent power",
        "Expert power",
        "Legitimate power",
        "Reward power"
    ],
    correctOption: 0
},

// Question 122
{
    text: "What is the purpose of the Project Management Information System (PMIS) in project management?",
    options: [
        "To identify project assumptions",
        "To allocate project resources",
        "To document project constraints",
        "To facilitate communication, tracking, and reporting of project information"
    ],
    correctOption: 3
},
// Question 123
{
    text: "What is the primary purpose of the Perform Quality Assurance process in project management?",
    options: [
        "To validate that project scope was completed successfully",
        "To verify that project deliverables meet specified requirements",
        "To audit project financial records",
        "To ensure that the project is adhering to quality standards"
    ],
    correctOption: 3
},

// Question 124
{
    text: "During which project management process are project activities and resources coordinated and integrated to execute the project management plan?",
    options: [
        "Develop Project Management Plan",
        "Direct and Manage Project Work",
        "Monitor and Control Project Work",
        "Perform Integrated Change Control"
    ],
    correctOption: 1
},

// Question 125
{
    text: "What is the main focus of the Monitor and Control Project Work process?",
    options: [
        "Executing project activities",
        "Tracking, reviewing, and regulating project progress and performance",
        "Closing out project activities",
        "Developing the project management plan"
    ],
    correctOption: 1
},

// Question 126
{
    text: "What is the primary purpose of the Risk Register in project management?",
    options: [
        "To identify project assumptions",
        "To document project constraints",
        "To record identified risks and their characteristics",
        "To create the project schedule"
    ],
    correctOption: 2
},

// Question 127
{
    text: "During which process does the project manager obtain the necessary approvals to proceed with project execution?",
    options: [
        "Develop Project Charter",
        "Develop Project Management Plan",
        "Direct and Manage Project Work",
        "Monitor and Control Project Work"
    ],
    correctOption: 0
},

// Question 128
{
    text: "What is the purpose of the Stakeholder Engagement Plan in project management?",
    options: [
        "To define how project resources will be allocated",
        "To document project assumptions",
        "To identify and categorize project stakeholders",
        "To manage and influence stakeholder expectations"
    ],
    correctOption: 3
},

// Question 129
{
    text: "Which type of dependency exists when one task cannot start until a predecessor task has been completed?",
    options: [
        "Internal dependency",
        "External dependency",
        "Mandatory dependency",
        "Discretionary dependency"
    ],
    correctOption: 0
},

// Question 130
{
    text: "What is the primary purpose of the Work Breakdown Structure (WBS) in project management?",
    options: [
        "To identify project assumptions",
        "To allocate project resources",
        "To define the project scope in a hierarchical structure",
        "To document project constraints"
    ],
    correctOption: 2
},

// Question 131
{
    text: "During which project management process are changes to project scope formally reviewed, approved, or rejected?",
    options: [
        "Define Scope",
        "Plan Scope Management",
        "Collect Requirements",
        "Control Scope"
    ],
    correctOption: 3
},
// Question 132
{
    text: "What is the primary purpose of the Risk Management Plan in project management?",
    options: [
    "To identify project assumptions",
    "To document project constraints",
    "To outline how risks will be identified, analyzed, and managed throughout the project",
    "To develop the project scope statement"
    ],
    correctOption: 2
    },
    
    // Question 133
    {
    text: "During which project management process are project deliverables formally accepted or rejected?",
    options: [
    "Control Quality",
    "Validate Scope",
    "Perform Quality Assurance",
    "Direct and Manage Project Work"
    ],
    correctOption: 1
    },
    
    // Question 134
    {
    text: "What is the primary objective of the Perform Quality Assurance process in project management?",
    options: [
    "To validate that project scope was completed successfully",
    "To verify that project deliverables meet specified requirements",
    "To audit project financial records",
    "To ensure that the project follows organizational quality policies and procedures"
    ],
    correctOption: 3
    },
    
    // Question 135
    {
    text: "What is the purpose of a Lessons Learned Register in project management?",
    options: [
    "To identify project risks",
    "To document project assumptions",
    "To capture and store lessons learned throughout the project lifecycle",
    "To develop the project scope statement"
    ],
    correctOption: 2
    },
    
    // Question 136
    {
    text: "During which process is the project management plan executed, and project work is performed to accomplish project objectives?",
    options: [
    "Initiating",
    "Planning",
    "Executing",
    "Monitoring and Controlling"
    ],
    correctOption: 2
    },
    
    // Question 137
    {
    text: "What is the primary purpose of the Work Breakdown Structure (WBS) Dictionary in project management?",
    options: [
    "To identify project assumptions",
    "To allocate project resources",
    "To document detailed information about each WBS component",
    "To document project constraints"
    ],
    correctOption: 2
    },
    
    // Question 138
    {
    text: "During which project management process are changes to project scope formally approved or rejected?",
    options: [
    "Define Scope",
    "Plan Scope Management",
    "Collect Requirements",
    "Control Scope"
    ],
    correctOption: 3
    },
    
    // Question 139
    {
    text: "What is the primary purpose of the Communications Management Plan in project management?",
    options: [
    "To define how project resources will be allocated",
    "To establish a communication plan",
    "To document project assumptions",
    "To monitor project work progress"
    ],
    correctOption: 1
    },
    
    // Question 140
    {
    text: "During the Close Project or Phase process, what is the primary focus?",
    options: [
    "Approving changes to project baselines",
    "Formally initiating the project",
    "Auditing project financial records",
    "Finalizing all project activities and ensuring project closure"
    ],
    correctOption: 3
    },
    
    // Question 141
    {
    text: "Which type of dependency exists when one task cannot start until another task has finished?",
    options: [
    "Internal dependency",
    "External dependency",
    "Mandatory dependency",
    "Discretionary dependency"
    ],
    correctOption: 0
    },
    // Question 142
{
    text: "What is the primary purpose of the Project Scope Statement in project management?",
    options: [
    "To identify project assumptions",
    "To document project constraints",
    "To define the project scope, deliverables, and objectives",
    "To outline how risks will be managed throughout the project"
    ],
    correctOption: 2
    },
    
    // Question 143
    {
    text: "During which project management process are project activities and resources coordinated and integrated to execute the project management plan?",
    options: [
    "Develop Project Management Plan",
    "Direct and Manage Project Work",
    "Monitor and Control Project Work",
    "Perform Integrated Change Control"
    ],
    correctOption: 1
    },
    
    // Question 144
    {
    text: "What is the main focus of the Monitor and Control Project Work process?",
    options: [
    "Executing project activities",
    "Tracking, reviewing, and regulating project progress and performance",
    "Closing out project activities",
    "Developing the project management plan"
    ],
    correctOption: 1
    },
    
    // Question 145
    {
    text: "What is the primary purpose of the Risk Register in project management?",
    options: [
    "To identify project assumptions",
    "To document project constraints",
    "To record identified risks and their characteristics",
    "To create the project schedule"
    ],
    correctOption: 2
    },
    
    // Question 146
    {
    text: "During which process does the project manager obtain the necessary approvals to proceed with project execution?",
    options: [
    "Develop Project Charter",
    "Develop Project Management Plan",
    "Direct and Manage Project Work",
    "Monitor and Control Project Work"
    ],
    correctOption: 0
    },
    
    // Question 147
    {
    text: "What is the purpose of the Stakeholder Engagement Plan in project management?",
    options: [
    "To define how project resources will be allocated",
    "To document project assumptions",
    "To identify and categorize project stakeholders",
    "To manage and influence stakeholder expectations"
    ],
    correctOption: 3
    },
    
    // Question 148
    {
    text: "Which type of dependency exists when one task cannot start until a predecessor task has been completed?",
    options: [
    "Internal dependency",
    "External dependency",
    "Mandatory dependency",
    "Discretionary dependency"
    ],
    correctOption: 0
    },
    
    // Question 149
    {
    text: "What is the primary purpose of the Work Breakdown Structure (WBS) in project management?",
    options: [
    "To identify project assumptions",
    "To allocate project resources",
    "To define the project scope in a hierarchical structure",
    "To document project constraints"
    ],
    correctOption: 2
    },
    
    // Question 150
    {
    text: "During which project management process are changes to project scope formally reviewed, approved, or rejected?",
    options: [
    "Define Scope",
    "Plan Scope Management",
    "Collect Requirements",
    "Control Scope"
    ],
    correctOption: 3
    },
    // Question 151
{
    text: "What is the primary objective of the Develop Project Charter process in project management?",
    options: [
    "To define how project resources will be allocated",
    "To establish a communication plan",
    "To formally authorize the project",
    "To document project assumptions"
    ],
    correctOption: 2
    },
    
    // Question 152
    {
    text: "During the Plan Stakeholder Engagement process, what is the focus?",
    options: [
    "Define project scope",
    "Identify and categorize project stakeholders",
    "Develop project schedule",
    "Approve project budget"
    ],
    correctOption: 1
    },
    
    // Question 153
    {
    text: "What is the primary purpose of the Project Management Plan in project management?",
    options: [
    "To identify project constraints",
    "To document project assumptions",
    "To define project scope",
    "To provide a reference point for project progress"
    ],
    correctOption: 3
    },
    
    // Question 154
    {
    text: "In project scheduling, what does the term 'float' or 'slack' refer to?",
    options: [
    "The time a task can be delayed without delaying the project",
    "The time a task is scheduled to start",
    "The time a task takes to complete",
    "The total time available for a project"
    ],
    correctOption: 0
    },
    
    // Question 155
    {
    text: "What is the main benefit of using a Responsibility Assignment Matrix (RAM) in project management?",
    options: [
    "Identify project risks",
    "Clarify team member roles and responsibilities",
    "Develop project schedule",
    "Determine project budget"
    ],
    correctOption: 1
    },
    
    // Question 156
    {
    text: "During the Control Procurements process, what is the primary focus?",
    options: [
    "Managing stakeholder expectations",
    "Closing out procurement contracts",
    "Selecting vendors",
    "Planning procurement activities"
    ],
    correctOption: 1
    },
    
    // Question 157
    {
    text: "Which project management process involves developing a detailed project scope statement?",
    options: [
    "Initiating",
    "Planning",
    "Executing",
    "Closing"
    ],
    correctOption: 1
    },
    
    // Question 158
    {
    text: "What is the purpose of the Stakeholder Engagement Plan in project management?",
    options: [
    "To define how project resources will be allocated",
    "To document project assumptions",
    "To identify and categorize project stakeholders",
    "To manage and influence stakeholder expectations"
    ],
    correctOption: 3
    },
    
    // Question 159
    {
    text: "During which phase of the project life cycle is the project scope statement developed?",
    options: [
    "Initiating",
    "Planning",
    "Executing",
    "Closing"
    ],
    correctOption: 1
    },
    
    // Question 160
    {
    text: "What is the purpose of the Project Schedule Baseline in project management?",
    options: [
    "To document project constraints",
    "To measure and monitor project performance",
    "To identify project assumptions",
    "To provide a reference point for project progress"
    ],
    correctOption: 3
    },
    // Question 161
{
    text: "What is the primary output of the Develop Project Team process?",
    options: [
        "Project staff assignments",
        "Team performance assessments",
        "Team charters",
        "Resource calendars"
    ],
    correctOption: 0
},

// Question 162
{
    text: "In project management, what is the purpose of the Lessons Learned Documentation?",
    options: [
        "Identify project risks",
        "Document project assumptions",
        "Capture and share knowledge from project experiences",
        "Develop the project scope statement"
    ],
    correctOption: 2
},

// Question 163
{
    text: "During the Develop Project Team process, what is the focus of team-building activities?",
    options: [
        "Improving individual performance",
        "Resolving conflicts",
        "Enhancing team dynamics and collaboration",
        "Monitoring project progress"
    ],
    correctOption: 2
},

// Question 164
{
    text: "What is the purpose of the Critical Path Method (CPM) in project management?",
    options: [
        "Identify project risks",
        "Determine project schedule flexibility",
        "Sequence project activities",
        "Analyze project costs"
    ],
    correctOption: 2
},

// Question 165
{
    text: "What does the term 'SWOT' stand for in project management?",
    options: [
        "Schedule, Work Breakdown Structure, Objectives, Timeline",
        "Strengths, Weaknesses, Opportunities, Threats",
        "Stakeholders, Work Packages, Objectives, Tasks",
        "Scope, Work Breakdown Structure, Outcomes, Timeline"
    ],
    correctOption: 1
},

// Question 166
{
    text: "What is the purpose of the Plan Communications Management process in project management?",
    options: [
        "Define how project resources will be allocated",
        "Establish a communication plan",
        "Document project assumptions",
        "Monitor project work progress"
    ],
    correctOption: 1
},

// Question 167
{
    text: "Which risk response strategy involves taking advantage of an opportunity if it occurs?",
    options: [
        "Mitigation",
        "Acceptance",
        "Exploitation",
        "Avoidance"
    ],
    correctOption: 2
},

// Question 168
{
    text: "What is the main benefit of using a Responsibility Assignment Matrix (RAM) in project management?",
    options: [
        "Identify project risks",
        "Clarify team member roles and responsibilities",
        "Develop project schedule",
        "Determine project budget"
    ],
    correctOption: 1
},

// Question 169
{
    text: "During the Control Procurements process, what is the primary focus?",
    options: [
        "Managing stakeholder expectations",
        "Closing out procurement contracts",
        "Selecting vendors",
        "Planning procurement activities"
    ],
    correctOption: 1
},

// Question 170
{
    text: "What is the purpose of the Plan Procurement Management process?",
    options: [
        "To create the project schedule",
        "To determine the appropriate project procurement strategy",
        "To manage and influence stakeholder expectations",
        "To define how project resources will be allocated"
    ],
    correctOption: 1
},
// Question 171
{
    text: "Which type of power is associated with a project manager's formal authority within the organizational structure?",
    options: [
        "Referent power",
        "Expert power",
        "Legitimate power",
        "Reward power"
    ],
    correctOption: 2
},

// Question 172
{
    text: "During the Close Procurements process, what is the primary objective?",
    options: [
        "Selecting vendors",
        "Finalizing all project contracts",
        "Monitoring project risks",
        "Closing out project activities"
    ],
    correctOption: 1
},

// Question 173
{
    text: "What is the purpose of the Perform Integrated Change Control process?",
    options: [
        "Approve or reject changes to project baselines",
        "Develop the project scope statement",
        "Create a communication plan",
        "Sequence project activities"
    ],
    correctOption: 0
},

// Question 174
{
    text: "What is the primary purpose of the Control Quality process?",
    options: [
        "To validate that project scope was completed successfully",
        "To verify that project deliverables meet specified requirements",
        "To approve changes to project baselines",
        "To audit project financial records"
    ],
    correctOption: 1
},

// Question 175
{
    text: "Which document provides the project manager with the authority to apply resources to project activities?",
    options: [
        "Project Charter",
        "Project Management Plan",
        "Work Breakdown Structure (WBS)",
        "Risk Register"
    ],
    correctOption: 0
},

// Question 176
{
    text: "What is the purpose of a risk register in project management?",
    options: [
        "To identify project assumptions",
        "To document project constraints",
        "To record identified risks and their characteristics",
        "To create the project schedule"
    ],
    correctOption: 2
},

// Question 177
{
    text: "During which process does the project manager obtain the necessary approvals to proceed with project execution?",
    options: [
        "Develop Project Charter",
        "Develop Project Management Plan",
        "Direct and Manage Project Work",
        "Monitor and Control Project Work"
    ],
    correctOption: 0
},

// Question 178
{
    text: "What is the purpose of a stakeholder engagement plan?",
    options: [
        "To define how project resources will be allocated",
        "To document project assumptions",
        "To identify and categorize project stakeholders",
        "To manage and influence stakeholder expectations"
    ],
    correctOption: 3
},

// Question 179
{
    text: "What is the primary output of the Develop Project Team process?",
    options: [
        "Project staff assignments",
        "Team performance assessments",
        "Team charters",
        "Resource calendars"
    ],
    correctOption: 0
},

// Question 180
{
    text: "Which process involves determining, documenting, and managing stakeholder needs and requirements to meet project objectives?",
    options: [
        "Identify Stakeholders",
        "Plan Stakeholder Engagement",
        "Manage Stakeholder Engagement",
        "Monitor Stakeholder Engagement"
    ],
    correctOption: 2
},
// Question 181
{
    text: "What does the term 'earned value' represent in project management?",
    options: [
        "The budgeted cost of work performed",
        "The actual cost of work performed",
        "The value of work actually performed",
        "The planned value of work to be performed"
    ],
    correctOption: 2
},

// Question 182
{
    text: "During the Develop Project Schedule process, what is the main output?",
    options: [
        "Project schedule network diagrams",
        "Resource calendars",
        "Schedule baseline",
        "Activity list"
    ],
    correctOption: 2
},

// Question 183
{
    text: "What is the purpose of the Plan Risk Responses process?",
    options: [
        "To identify project risks",
        "To create a risk management plan",
        "To develop risk response strategies",
        "To document project assumptions"
    ],
    correctOption: 2
},

// Question 184
{
    text: "In project management, what is the primary purpose of the Stakeholder Register?",
    options: [
        "To identify project assumptions",
        "To document project constraints",
        "To record identified risks and their characteristics",
        "To identify and categorize project stakeholders"
    ],
    correctOption: 3
},

// Question 185
{
    text: "What is the main focus of the Monitor and Control Project Work process?",
    options: [
        "Executing project activities",
        "Tracking, reviewing, and regulating project progress and performance",
        "Closing out project activities",
        "Developing the project management plan"
    ],
    correctOption: 1
},

// Question 186
{
    text: "During the Control Risks process, what is the primary goal?",
    options: [
        "Accepting all identified risks",
        "Avoiding all identified risks",
        "Taking advantage of all identified risks",
        "Minimizing the impact and probability of identified risks"
    ],
    correctOption: 3
},

// Question 187
{
    text: "What is the purpose of the Direct and Manage Project Work process?",
    options: [
        "To document project assumptions",
        "To define how project resources will be allocated",
        "To lead and perform the work defined in the project management plan",
        "To monitor project work progress"
    ],
    correctOption: 2
},

// Question 188
{
    text: "During which process is the project management plan developed?",
    options: [
        "Initiating",
        "Planning",
        "Executing",
        "Monitoring and Controlling"
    ],
    correctOption: 1
},

// Question 189
{
    text: "What is the primary purpose of the Control Communications process?",
    options: [
        "Define how project resources will be allocated",
        "Establish a communication plan",
        "Monitor and control project communications",
        "Document project assumptions"
    ],
    correctOption: 2
},

// Question 190
{
    text: "Which type of dependency exists when the start or finish of an activity depends on the start or finish of another external project?",
    options: [
        "Internal dependency",
        "External dependency",
        "Mandatory dependency",
        "Discretionary dependency"
    ],
    correctOption: 1
},
// Question 191
{
    text: "What is the primary purpose of the Validate Scope process?",
    options: [
        "To verify that project deliverables meet specified requirements",
        "To approve changes to project baselines",
        "To audit project financial records",
        "To develop the project scope statement"
    ],
    correctOption: 0
},

// Question 192
{
    text: "How would you resolve conflicts between team members?",
    options: [
        "Communicate and mediate",
        "Ignore the conflict",
        "Escalate to management",
        "Avoid team members"
    ],
    correctOption: 0
},

// Question 193
{
    text: "What steps do you take to ensure project deadlines are met?",
    options: [
        "Create a revised schedule",
        "Extend the deadline",
        "Ignore delays",
        "Reduce project scope"
    ],
    correctOption: 0
},

// Question 194
{
    text: "During the Control Quality process, what is the main focus?",
    options: [
        "Validate that project scope was completed successfully",
        "Verify that project deliverables meet specified requirements",
        "Approve changes to project baselines",
        "Audit project financial records"
    ],
    correctOption: 1
},

// Question 195
{
    text: "What is the purpose of the Stakeholder Engagement Plan in project management?",
    options: [
        "To define how project resources will be allocated",
        "To document project assumptions",
        "To identify and categorize project stakeholders",
        "To manage and influence stakeholder expectations"
    ],
    correctOption: 3
},

// Question 196
{
    text: "During which phase of the project life cycle is the project scope statement developed?",
    options: [
        "Initiating",
        "Planning",
        "Executing",
        "Closing"
    ],
    correctOption: 1
},

// Question 197
{
    text: "What is the purpose of the Project Schedule Baseline in project management?",
    options: [
        "To document project constraints",
        "To measure and monitor project performance",
        "To identify project assumptions",
        "To provide a reference point for project progress"
    ],
    correctOption: 3
},

// Question 198
{
    text: "What is the primary output of the Develop Project Team process?",
    options: [
        "Project staff assignments",
        "Team performance assessments",
        "Team charters",
        "Resource calendars"
    ],
    correctOption: 0
},

// Question 199
{
    text: "In project management, what is the purpose of the Lessons Learned Documentation?",
    options: [
        "Identify project risks",
        "Document project assumptions",
        "Capture and share knowledge from project experiences",
        "Develop the project scope statement"
    ],
    correctOption: 2
},

// Question 200
{
    text: "During the Develop Project Team process, what is the focus of team-building activities?",
    options: [
        "Improving individual performance",
        "Resolving conflicts",
        "Enhancing team dynamics and collaboration",
        "Monitoring project progress"
    ],
    correctOption: 2
}

];

const QuizComponent = ({ setBackgroundIndex }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [totalAttempted, setTotalAttempted] = useState(0);
    const [backgroundIndex, setBackgroundIndexLocal] = useState(4);
    const [isStarted, setIsStarted] = useState(false);
    const audioRef = useRef(null);

    const handleOptionChange = (index) => {
        setSelectedOption(index);
    };

    const startQuiz = () => {
        setIsStarted(true);
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const nextQuestion = () => {
        if (selectedOption !== null) {
            if (selectedOption === Questions[currentQuestionIndex].correctOption) {
                setScore(score + 1);
                setBackgroundIndexLocal(prevIndex => Math.min(prevIndex + 1, files.length - 1));
            } else {
                setBackgroundIndexLocal(prevIndex => Math.max(prevIndex - 1, 0));
            }

            setSelectedOption(null);
            setTotalAttempted(totalAttempted + 1);

            if (currentQuestionIndex < Questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            }
        } else {
            alert("Please select an answer before proceeding.");
        }
    };

    useEffect(() => {
        if (audioRef.current && isStarted) {
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play();
        }
        setBackgroundIndex(backgroundIndex);
    }, [backgroundIndex, isStarted, setBackgroundIndex]);

    return (
        <div>
            <img src="/images/PMP QUIZ GAME BANNER.gif" alt="Quiz Banner" />
            <div style={{
                backgroundImage: `url(/images/${files[backgroundIndex].split('.')[0]}.jpg)`,
                backgroundSize: 'cover',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <audio ref={audioRef} loop={true}>
                    <source src={`/sounds/${files[backgroundIndex].split('.')[0]}.mp3`} type="audio/mpeg" />
                </audio>
                {!isStarted ? (
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                        <p>Welcome to the quiz! Are you ready to embark on a journey of knowledge and discovery? Read each question carefully, select the answer you believe is correct, and click the "Start Quiz" button to begin your adventure!</p>
                        <button onClick={startQuiz}>Start Quiz</button>
                    </div>
                ) : (
                    <>
                        <h3 id="questionText" style={{ color: 'yellow' }}>Question: {Questions[currentQuestionIndex].text}</h3>
                        {Questions[currentQuestionIndex].options.map((option, index) => (
                            <div key={index}>
                                <input
                                    type="radio"
                                    id={`option${String.fromCharCode(65 + index)}Text`}
                                    name="answer"
                                    value={index}
                                    checked={selectedOption === index}
                                    onChange={() => handleOptionChange(index)}
                                />
                                <label htmlFor={`option${String.fromCharCode(65 + index)}Text`}>{option}</label>
                            </div>
                        ))}
                        <button onClick={nextQuestion}>Next Question</button>
                        <div>
                            <p style={{ color: 'yellow' }}>Your score: {score}/{totalAttempted}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default QuizComponent;