"use client";

import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const WaiverLegal = ({ children }: Props) => {
  const [showWaiver, setShowWaiver] = useState(false);

  const toggleWaiver = () => {
    setShowWaiver(!showWaiver);
  };

  return (
    <>
      <div onClick={toggleWaiver}>{children}</div>
      {showWaiver && (
        <>
          <p className="mb-4">
            I HEREBY ASSUME ALL OF THE RISKS OF PARTICIPATING IN ANY/ALL
            ACTIVITIES ASSOCIATED WITH THIS EVENT, including by way of example
            and not limitation, any risks that may arise from negligence or
            carelessness on the part of the persons or entities being released,
            from dangerous or defective equipment or property owned, maintained,
            or controlled by them, or because of their possible liability
            without fault.
          </p>
          <p className="mb-4">
            I certify that I am physically fit, have sufficiently prepared or
            trained for participation in this activity, and have not been
            advised to not participate by a qualified medical professional. I
            certify that there are no health-related reasons or problems which
            preclude my participation in this activity. I acknowledge that this
            Accident Waiver and Release of Liability Form will be used by the
            event holders, sponsors, and organizers of the activity in which I
            may participate, and that it will govern my actions and
            responsibilities at said activity. In consideration of my
            application and permitting me to participate in this activity, I
            hereby take action for myself, my executors, administrators, heirs,
            next of kin, successors, and assigns as follows:
          </p>

          <p className="mb-4">
            (A) I WAIVE, RELEASE, AND DISCHARGE from any and all liability,
            including but not limited to, liability arising from the negligence
            or fault of the entities or persons released, for my death,
            disability, personal injury, property damage, property theft, or
            actions of any kind which may hereafter occur to me including my
            traveling to and from this activity, THE FOLLOWING ENTITIES OR
            PERSONS: Haulin Hatchets LLC. and/or their directors, officers,
            employees, volunteers, representatives, and agents, and the activity
            holders, sponsors, and property owners.
          </p>

          <p className="mb-4">
            (B) INDEMNIFY, HOLD HARMLESS, AND PROMISE NOT TO SUE the entities or
            persons mentioned in this paragraph from any and all liabilities or
            claims made as a result of participation in this activity, whether
            caused by the negligence of release or otherwise. I acknowledge that
            Haulin Hatchets LLC and their directors, officers, volunteers,
            representatives, and agents are NOT responsible for the errors,
            omissions, acts, or failures to act of any party or entity
            conducting a specific activity on their behalf.
          </p>

          <p className="mb-4">
            I acknowledge that this activity may involve a test of a person's
            physical and mental limits and carries with it the potential for
            death, severe injury, and property loss. The risks include, but are
            not limited to, those caused by terrain, facilities, temperature,
            weather, condition of participants, equipment, vehicular traffic,
            lack of hydration, and actions of other people including, but not
            limited to, participants, volunteers, monitors, and/or producers of
            the activity. These risks are not only inherent to participants, but
            are also present for volunteers.
          </p>

          <p className="mb-12">
            I hereby consent to receive medical treatment which may be deemed
            advisable in the event of injury, accident, and/or illness during
            this activity. I understand that while participating in this
            activity, I may be photographed. I agree to allow my photo, video,
            or film likeness to be used for any legitimate purpose by the
            activity holders, producers, sponsors, organizers, and assigns.
          </p>
        </>
      )}
    </>
  );
};
