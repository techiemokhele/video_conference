import CallListComponent from "@/components/card/CallListComponent";

const Recordings = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Meeting Recordings</h1>

      <CallListComponent type="recordings" />
    </section>
  );
};

export default Recordings;
