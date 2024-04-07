import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon } from "@radix-ui/react-icons";
import React from "react";
export interface WorkExperience {
  company: string;
  position: string;
  responsibilities: Responsability[];
  date: string;
}
export interface Responsability {
  responsibility: string;
  oneWordSummary: string;
}
interface WorkExperienceCardProps {
  workExperience: WorkExperience;
}
const WorkExperienceCard = ({ workExperience }: WorkExperienceCardProps) => {
  const { company, position, responsibilities, date } = workExperience;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{company}</CardTitle>
        <CardDescription>{position}</CardDescription>
      </CardHeader>
      <CardContent>
        {responsibilities.map((responsibility, index) => (
          <div
            key={responsibility.oneWordSummary}
            className="flex w-full justify-between mb-4"
          >
            <div>{responsibility.responsibility}</div>
            <div className="flex justify-start w-1/3">
              <Badge variant={"default"}>{responsibility.oneWordSummary}</Badge>
            </div>
          </div>
        ))}
      </CardContent>
      <Separator />
      <div className="flex w-full justify-start">
        <div className="flex my-4 ml-4 items-start">
          <CalendarIcon className="w-6 h-5 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </div>
    </Card>
  );
};

export default WorkExperienceCard;
