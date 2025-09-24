import { useAuth } from "react-oidc-context";

const LandingPage = () => {
  const auth = useAuth();
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="hero bg-base-100 p-8 rounded-xl shadow-xl max-w-md">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img
              className="h-36 w-36 mx-auto mb-4"
              src="./notes.png"
              alt="Notes App"
            ></img>
            <h1 className="text-5xl font-bold">Notes App</h1>
            <p className="py-6">
              Securely store and manage your personal notes with AWS DynamoDB.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                className="btn btn-primary"
                onClick={() => auth.signinRedirect()}
              >
                Sign In
              </button>
              <button
                className="btn btn-outline"
                onClick={() =>
                  (window.location.href =
                    "https://ap-south-19wws0ipni.auth.ap-south-1.amazoncognito.com/signup?client_id=1v6mehug6e7kmshsmqjq5035c0&code_challenge=rM4mJzbkf_YDO6Bo_B4IaYA9MVmGHED6nFAHjj-46F0&code_challenge_method=S256&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone&state=2a4fa6e51b6e4751a051bc369596cbe7")
                }
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
