export interface AssessmentProgress {
  labels: string[];
  datasets: Dataset[];
}

export interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
}
