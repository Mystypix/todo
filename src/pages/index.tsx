import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { AddItem } from "~/components/AddItem";
import { Task } from "~/components/Task";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TODO</title>
        <meta name="description" content="TODO" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <AuthShowcase />
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  // const { data: tasks } = api.task.getUnresolved.useQuery(
  //   undefined, // no input
  //   { enabled: sessionData?.user !== undefined }
  // );

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 px-3">
      {/* {sessionData && <span>Logged in as {sessionData.user?.name}</span>} */}
      {/* {secretMessage && <span> - {secretMessage}</span>} */}
      {/* <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button> */}
      {/* {tasks &&
        tasks.map(({ id, ...rest }) => <Task key={id} id={id} {...rest} />)} */}
      {sessionData && <AddItem />}
    </div>
  );
};
