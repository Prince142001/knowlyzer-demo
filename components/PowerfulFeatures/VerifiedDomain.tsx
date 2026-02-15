import { CodeBlock, CodeBlockCode } from "../ui/code-block";

export function VerifiedDomain() {
  const codeSnippet = `// Your API key will only work on verified domains
<script src="https://knowlizer.com/widget.js"
  data-api-key="cb_e690bf07_••••••••••••••"
  data-position="bottom-right">
</script>
`;

  return (
    <div className="w-[42%] min-h-100 p-7 bg-secondary/50 border border-border rounded-2xl relative overflow-hidden flex flex-col justify-between">
      <div className="relative z-10 mb-4">
        <h3 className="text-4xl font-semibold text-white">
          Verified Domains (API)
        </h3>
        <p className="text-lg text-left text-accent mt-4">
          Use knowlyzer securely via API and widget. Each API key only works on
          verified domains, preventing misuse and abuse.
        </p>
      </div>

      <div className="w-full">
        {/* FIX STARTS HERE */}
        <CodeBlock className="my-4">
          <CodeBlockCode
            code={codeSnippet}
            language="bash"
            theme="github-dark" // Optional: darker theme usually looks better
          />
        </CodeBlock>
        <div className="mt-4 flex items-center">
          <p className="text-lg text-green">knowlyzer.com</p>
          <figure className="ml-14">
            <img
              src="../../assets/icons/verified-checked.png"
              alt="Verified Checked"
              className="w-4 h-full object-contain"
            />
          </figure>
          <p className="text-lg text-white ml-1.5">verified</p>
        </div>
        <div className="mt-4 flex gap-1.5 items-center justify-start">
          <figure>
            <img
              src="../../assets/icons/alert.png"
              alt="Alert"
              className="w-4 h-full object-contain"
            />
          </figure>
          <p className="text-lg text-left text-accent">
            API requests are restricted to verified domains only.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerifiedDomain;
