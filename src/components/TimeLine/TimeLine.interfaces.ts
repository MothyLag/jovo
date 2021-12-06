export interface TimeLineProps {
  events: TLEvent[];
}

export interface TLEvent {
  name: string;
  description: string;
  time: string;
}
