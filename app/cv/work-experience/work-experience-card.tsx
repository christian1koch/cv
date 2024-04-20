import { CalendarIcon } from "@radix-ui/react-icons";
import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { WorkExperience } from "./work-experience-types";

interface WorkExperienceCardProps {
  workExperience: WorkExperience;
}
const WorkExperienceCard = ({ workExperience }: WorkExperienceCardProps) => {
  const { company, position, responsibilities, date, id } = workExperience;
  return (
    <div className="mb-16">
      <Card>
        <CardHeader>
          <CardTitle id={id} data-section={id}>
            {company}
          </CardTitle>
          <CardDescription>{position}</CardDescription>
        </CardHeader>
        <CardContent>
          {responsibilities.map((responsibility) => (
            <div
              key={responsibility.oneWordSummary}
              className="mb-4 flex w-full justify-between"
            >
              <div>{responsibility.responsibility}</div>
              <div className="flex w-1/3 justify-start">
                <Badge variant="default">{responsibility.oneWordSummary}</Badge>
              </div>
            </div>
          ))}
        </CardContent>
        <Separator />
        <div className="flex w-full justify-start">
          <div className="my-4 ml-4 flex items-start">
            <CalendarIcon className="h-5 w-6 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WorkExperienceCard;
