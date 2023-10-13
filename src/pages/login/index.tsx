import Layout from "@/layout";
import { signIn, useSession } from "next-auth/react";
import Container from "@/components/Container";

export default function Login() {
  const { data: sessionData } = useSession();

  return (
    <Layout title="Login | My dev Journey" description="Faça login ">
      <div className="flex h-[700px] min-h-[calc(100vh-200px)]  flex-col items-center justify-center px-10">
        <Container className="flex h-[300px] w-[600px] max-w-full flex-col gap-10 px-10 py-10">
          <h2 className="text-center text-5xl text-white ">Login</h2>
          {sessionData ? (
            <p className="text-center">Already Logged In</p>
          ) : (
            <button
              className="w-full rounded-full bg-orange px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
              onClick={() => void signIn()}
            >
              Sign in
            </button>
          )}
        </Container>
      </div>
    </Layout>
  );
}
