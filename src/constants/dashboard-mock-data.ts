export interface ClassItem {
  id: string;
  code: string;
  name: string;
  slot: string;
  backgroundColor: string;
  hasDot?: boolean;
  dotColor?: string;
}

export interface TaskItem {
  id: string;
  title: string;
  subject: string;
  type: string;
  typeColor: string;
  dueDate: string;
  daysLeft: number;
  badgeBgColor: string;
  dotColor: string;
  status: "pending" | "done";
}

export interface CheckInItem {
  id: string;
  location: string;
  timestamp: string;
  type: string;
}

export interface DashboardStats {
  attendance: {
    value: string;
    label: string;
    subtext: string;
    color: string;
  };
  gpa: {
    value: string;
    label: string;
    subtext: string;
    color: string;
  };
  tasksDone: {
    value: string;
    label: string;
    subtext: string;
    color: string;
  };
}

export const MOCK_STATS: DashboardStats = {
  attendance: {
    value: "88%",
    label: "Attendance",
    subtext: "This semester",
    color: "#10B981",
  },
  gpa: {
    value: "8.4",
    label: "GPA",
    subtext: "Out of 10",
    color: "#8B5CF6",
  },
  tasksDone: {
    value: "12/18",
    label: "Tasks Done",
    subtext: "This month",
    color: "#F59E0B",
  },
};

export const MOCK_CLASSES: ClassItem[] = [
  {
    id: "1",
    code: "PRP274",
    name: "Database Systems",
    slot: "ETH – A1+TA1",
    backgroundColor: "#EDE9FE",
    hasDot: true,
    dotColor: "#8B5CF6",
  },
  {
    id: "2",
    code: "PRP378",
    name: "Probability & Stats",
    slot: "ETH – F1+TF1",
    backgroundColor: "#FEF9C3",
    hasDot: false,
  },
  {
    id: "3",
    code: "CSE2005",
    name: "Operating Systems",
    slot: "SJT – B2+TB2",
    backgroundColor: "#E0F2FE",
    hasDot: false,
  },
];

export const MOCK_TASKS: TaskItem[] = [
  {
    id: "t1",
    title: "Database Systems Lab Report",
    subject: "CSE",
    type: "Lab",
    typeColor: "#8B5CF6",
    dueDate: "Due Sep 12, 2026",
    daysLeft: 3,
    badgeBgColor: "#EF4444",
    dotColor: "#EF4444",
    status: "pending",
  },
  {
    id: "t2",
    title: "Probability — Problem Set 4",
    subject: "MATH",
    type: "Assignment",
    typeColor: "#D97706",
    dueDate: "Due Sep 14, 2026",
    daysLeft: 5,
    badgeBgColor: "#F59E0B",
    dotColor: "#F59E0B",
    status: "pending",
  },
  {
    id: "t3",
    title: "French Level I — Assessment 8",
    subject: "ELA",
    type: "Assessment",
    typeColor: "#EF4444",
    dueDate: "Due Sep 15, 2026",
    daysLeft: 6,
    badgeBgColor: "#F59E0B",
    dotColor: "#EF4444",
    status: "pending",
  },
  {
    id: "t4",
    title: "Microprocessor Case Study",
    subject: "ECE",
    type: "Case Study",
    typeColor: "#10B981",
    dueDate: "Due Sep 18, 2026",
    daysLeft: 9,
    badgeBgColor: "#10B981",
    dotColor: "#10B981",
    status: "pending",
  },
  {
    id: "t5",
    title: "Operating Systems Quiz",
    subject: "CSE",
    type: "Quiz",
    typeColor: "#3B82F6",
    dueDate: "Due Sep 20, 2026",
    daysLeft: 11,
    badgeBgColor: "#10B981",
    dotColor: "#F59E0B",
    status: "done",
  },
];

export const MOCK_CHECKINS: CheckInItem[] = [
  {
    id: "c1",
    location: "PRP347",
    timestamp: "09-09-2026 15:58",
    type: "Entry",
  },
  {
    id: "c2",
    location: "SJT515",
    timestamp: "09-09-2026 14:02",
    type: "Entry",
  },
  {
    id: "c3",
    location: "PRP274",
    timestamp: "08-09-2026 09:05",
    type: "Entry",
  },
  {
    id: "c4",
    location: "PRP378",
    timestamp: "08-09-2026 10:55",
    type: "Entry",
  },
];

export const AI_PROMPT_CHIPS = [
  "Summarize my Database Systems notes",
  "Create a study plan for...",
  "What is due tomorrow?",
];
