import ToggleSwitch from "./ToggleSwitch";
import MemberRow from "./MemberRow";

type ReminderCardProps = {
  title: string;
  description: string;
  enabled: boolean;
  showMembers?: boolean;
};

export default function ReminderCard({
  title,
  description,
  enabled,
  showMembers = false,
}: ReminderCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-[#E3E3EF] p-5">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg text-[#1F1F3D]">
          {title}
        </h3>

       <ToggleSwitch defaultValue={enabled} />
      </div>

      <p className="text-[#6B6B85] text-sm leading-7 mt-4">
        {description}
      </p>

      {showMembers && (
        <>
          <div className="border-t border-dashed border-[#DADAEA] my-4" />

          <p className="text-xs font-bold uppercase text-[#6B6B85] mb-4">
            Due This Week
          </p>

          <div className="space-y-4">
            <MemberRow
              initials="RS"
              name="Rahul Sharma"
              info="Gym — expires Apr 19"
              badge="2 days"
              color="bg-[#5B4EF7]"
              expired={false}
            />

            <MemberRow
              initials="PS"
              name="Priya Singh"
              info="Library — expires Apr 20"
              badge="3 days"
              color="bg-pink-600"
              expired={false}
            />

            <MemberRow
              initials="AK"
              name="Amit Kumar"
              info="Gym — expired Apr 10"
              badge="Expired"
              color="bg-orange-500"
              expired={true}
            />
          </div>
        </>
      )}
    </div>
  );
}