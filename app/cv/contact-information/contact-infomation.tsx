"use client";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CkH2 } from "@/components/ui/typography";
import TextSection from "../shared/text-section";

export interface ContactInformationProps {
  email: string;
  phone: string;
  github?: string;
  linkedin?: string;
  image: string;
  name: string;
  role: string;
  id: string;
}

export const ContactInformation = (props: ContactInformationProps) => {
  return (
    <div className="my-8 flex">
      <div className="w-32 rounded-full bg-primary/90">
        <Image
          alt={props.name}
          className="rounded-full"
          height={128}
          src={props.image}
          width={128}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className=" mx-4 flex flex-col items-center">
          <CkH2
            className="mt-2 text-4xl font-bold"
            data-section={props.id}
            id={props.id}
          >
            {props.name}
          </CkH2>
          <TextSection>{props.role}</TextSection>
        </div>
        <div className="mx-6 flex justify-between">
          <div>
            <PhoneNumberButton phone={props.phone} />
            {!!props.linkedin && <LinkedinButton linkedin={props.linkedin} />}
            {!!props.github && <GithubButton github={props.github} />}
          </div>
          <Button asChild>
            <a href={`mailto:${props.email}`}>
              <EnvelopeClosedIcon className="mr-2" /> E-mail me
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const GithubButton = ({ github }: { github: string }) => (
  <Button asChild className="mx-1" size="icon" variant="outline">
    <Link href={github} target="_blank">
      <GitHubLogoIcon />
    </Link>
  </Button>
);

const LinkedinButton = ({ linkedin }: { linkedin: string }) => (
  <Button asChild className="mx-1" size="icon" variant="outline">
    <Link href={linkedin} target="_blank">
      <LinkedInLogoIcon />
    </Link>
  </Button>
);

const PhoneNumberButton = ({ phone }: { phone: string }) => {
  const [shouldShowPhoneNumber, setShouldShowPhoneNumber] = useState<boolean>();
  return (
    <Button
      className="mx-1"
      size={shouldShowPhoneNumber ? "default" : "icon"}
      variant="outline"
      onClick={() => setShouldShowPhoneNumber(!shouldShowPhoneNumber)}
    >
      <MobileIcon />
      {!!shouldShowPhoneNumber && phone}
    </Button>
  );
};
