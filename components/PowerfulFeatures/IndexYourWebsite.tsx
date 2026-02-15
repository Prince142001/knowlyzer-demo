export function IndexYourWebsite() {
  return (
    <div className="w-[55%] min-h-100 p-7 bg-secondary/50 border border-border rounded-2xl">
      <div>
        <h3 className="text-4xl font-semibold text-white">
          Index Your Website
        </h3>
        <p className="text-lg text-left text-accent mt-4">
          Add your website URL. ClearChat securely crawls and indexes your
          entire site, so you can ask questions instantly
        </p>
      </div>
      <div className="border border-border rounded-2xl mt-8">
        <div className="border-b border-border px-5 py-3 flex">
          <ul className="flex items-center gap-2">
            <li className="w-5 h-5 bg-red rounded-full"></li>
            <li className="w-5 h-5 bg-green rounded-full"></li>
            <li className="w-5 h-5 bg-yellow rounded-full"></li>
          </ul>

          <div className="w-3/4 py-1.5 mx-auto border border-border rounded-full">
            <p className="text-[16px] leading-5 text-white text-center">
              httpx://www.knowlyzer.com
            </p>
          </div>
        </div>
        <div className="h-38 flex items-center justify-center flex-col">
          <p className="text-lg text-white">
            Website <span className="text-green">knowlyzer</span> indexed
            successfully
          </p>
          <figure className="mt-6">
            <img
              src="../../assets/icons/verified-checked.png"
              alt="Verified Checked"
              className="w-6 h-6 object-contain"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
