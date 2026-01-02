export default function Safety() {
  const items = [
    { label: "Compliance" },
    { label: "Safety Programs" },
    { label: "Third Party Verification" },
  ];

  const boxes = [
    {
      title: "OVERSIGHT",
      description: "Dedicated safety officer regularly conducts random site visits",
      icon: (
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.52047 13.2643C2.42042 13.0635 2.3704 12.9631 2.29342 12.5515C2.25245 12.3324 2.25245 11.6676 2.29342 11.4485C2.3704 11.0369 2.42042 10.9365 2.52047 10.7357C3.5251 8.71928 6.16852 5 11.9999 5C17.8312 5 20.4747 8.71928 21.4793 10.7357C21.5793 10.9365 21.6294 11.0369 21.7063 11.4485C21.7473 11.6676 21.7473 12.3324 21.7063 12.5515C21.6294 12.9631 21.5793 13.0635 21.4793 13.2643C20.4747 15.2807 17.8313 19 11.9999 19C6.16852 19 3.5251 15.2807 2.52047 13.2643Z"
            stroke="#F0F0F0"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9999 12C14.9999 13.6569 13.6567 15 11.9999 15C10.343 15 8.99988 13.6569 8.99988 12C8.99988 10.3431 10.343 9 11.9999 9C13.6567 9 14.9999 10.3431 14.9999 12Z"
            stroke="#F0F0F0"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      ),
    },
    {
      title: "TRAINING",
      description: "Comprehensive and ongoing safety training for all employees",
      icon: (
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 6C20.7348 6 20.4804 6.10536 20.2929 6.29289C20.1054 6.48043 20 6.73478 20 7V17C20 17.7956 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7956 20 17 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H17C18.3261 22 19.5979 21.4732 20.5355 20.5355C21.4732 19.5979 22 18.3261 22 17V7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6ZM18 15V5C18 4.20435 17.6839 3.44129 17.1213 2.87868C16.5587 2.31607 15.7956 2 15 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V15C2 15.7956 2.31607 16.5587 2.87868 17.1213C3.44129 17.6839 4.20435 18 5 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15ZM10 4H12V8.86L11.64 8.56C11.4603 8.41033 11.2339 8.32837 11 8.32837C10.7661 8.32837 10.5397 8.41033 10.36 8.56L10 8.86V4ZM4 15V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H8V11C7.99999 11.1912 8.05477 11.3783 8.15785 11.5393C8.26094 11.7003 8.40801 11.8284 8.58164 11.9083C8.75527 11.9883 8.94819 12.0169 9.13754 11.9906C9.32688 11.9643 9.50473 11.8843 9.65 11.76L11 10.63L12.35 11.76C12.5311 11.9149 12.7617 12 13 12C13.1447 11.999 13.2876 11.9683 13.42 11.91C13.5936 11.8297 13.7405 11.7012 13.8433 11.5399C13.9461 11.3787 14.0005 11.1913 14 11V4H15C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15Z"
            fill="#F0F0F0"
          />
        </svg>

      ),
    },
    {
      title: "PROCEDURES",
      description: "Strict adherence to the latest approved safety protocols",
      icon: (
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4V3V4ZM13.638 19.673L14.092 18.782H14.092L13.638 19.673ZM12.327 18.362L11.436 18.816L12.327 18.362ZM19 6V5C18.4477 5 18 4.55228 18 4H17H16C16 5.65685 17.3431 7 19 7V6ZM17 4H18C18 3.44772 18.4477 3 19 3V2V1C17.3431 1 16 2.34315 16 4H17ZM19 2V3C19.5523 3 20 3.44772 20 4H21H22C22 2.34315 20.6569 1 19 1V2ZM21 4H20C20 4.55228 19.5523 5 19 5V6V7C20.6569 7 22 5.65685 22 4H21ZM19 14V13C18.4477 13 18 12.5523 18 12H17H16C16 13.6569 17.3431 15 19 15V14ZM17 12H18C18 11.4477 18.4477 11 19 11V10V9C17.3431 9 16 10.3431 16 12H17ZM19 10V11C19.5523 11 20 11.4477 20 12H21H22C22 10.3431 20.6569 9 19 9V10ZM21 12H20C20 12.5523 19.5523 13 19 13V14V15C20.6569 15 22 13.6569 22 12H21ZM5 6V5C4.44772 5 4 4.55228 4 4H3H2C2 5.65685 3.34315 7 5 7V6ZM3 4H4C4 3.44772 4.44772 3 5 3V2V1C3.34315 1 2 2.34315 2 4H3ZM5 2V3C5.55228 3 6 3.44772 6 4H7H8C8 2.34315 6.65685 1 5 1V2ZM7 4H6C6 4.55228 5.55228 5 5 5V6V7C6.65685 7 8 5.65685 8 4H7ZM19 22V21C18.4477 21 18 20.5523 18 20H17H16C16 21.6569 17.3431 23 19 23V22ZM17 20H18C18 19.4477 18.4477 19 19 19V18V17C17.3431 17 16 18.3431 16 20H17ZM19 18V19C19.5523 19 20 19.4477 20 20H21H22C22 18.3431 20.6569 17 19 17V18ZM21 20H20C20 20.5523 19.5523 21 19 21V22V23C20.6569 23 22 21.6569 22 20H21ZM7 4V5L12 5V4V3L7 3V4ZM12 4V5L17 5V4V3L12 3V4ZM16.8 20V21H17V20V19H16.8V20ZM12 4H11V12H12H13V4H12ZM12 12H11V15.2H12H13V12H12ZM12 12V13H17V12V11H12V12ZM16.8 20V19C15.9434 19 15.3611 18.9992 14.911 18.9624C14.4726 18.9266 14.2484 18.8617 14.092 18.782L13.638 19.673L13.184 20.564C13.6694 20.8113 14.1861 20.9099 14.7482 20.9558C15.2986 21.0008 15.9764 21 16.8 21V20ZM12 15.2H11C11 16.0236 10.9992 16.7014 11.0442 17.2518C11.0901 17.8139 11.1887 18.3306 11.436 18.816L12.327 18.362L13.218 17.908C13.1383 17.7516 13.0734 17.5274 13.0376 17.089C13.0008 16.6389 13 16.0566 13 15.2H12ZM13.638 19.673L14.092 18.782C13.7157 18.5903 13.4097 18.2843 13.218 17.908L12.327 18.362L11.436 18.816C11.8195 19.5686 12.4314 20.1805 13.184 20.564L13.638 19.673Z"
            fill="#F0F0F0"
          />
        </svg>

      ),
    },
    {
      title: "INCENTIVES",
      description: "Safety rewards and incentives offered to all employees",
      icon: (
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 13.9011L9.57986 12.5318C9.99952 12.3713 10.2093 12.291 10.426 12.2431C10.6183 12.2005 10.8144 12.177 11.0114 12.1729C11.2332 12.1683 11.4561 12.1967 11.9018 12.2536L16.2865 12.8126C17.1341 12.9207 17.7725 13.6367 17.7829 14.4911C17.7946 15.4454 17.0242 16.2253 16.0698 16.2253H14.2755M6 19.407H7.19099C7.62422 19.407 7.84084 19.407 8.05278 19.4374C8.241 19.4644 8.42623 19.5092 8.60596 19.5713C8.80835 19.6412 9.00099 19.7402 9.38625 19.9384L10.2416 20.3783C10.7632 20.6465 11.024 20.7806 11.2996 20.8611C11.5442 20.9326 11.7969 20.9726 12.0516 20.9801C12.3386 20.9886 12.6281 20.9416 13.2071 20.8475L16.6459 20.2884C17.0631 20.2206 17.2718 20.1866 17.4715 20.1248C17.6488 20.0699 17.8207 19.9986 17.9848 19.9119C18.1697 19.8143 18.3411 19.6907 18.684 19.4433L21.2616 17.5838C21.7253 17.2493 22 16.7123 22 16.1405C22 14.758 20.4925 13.9035 19.3063 14.6135L17.1923 15.879M22 5.73615C22 7.79956 20.3273 9.47229 18.2639 9.47229C16.2004 9.47229 14.5277 7.79956 14.5277 5.73615C14.5277 3.67273 16.2004 2 18.2639 2C20.3273 2 22 3.67273 22 5.73615ZM4 21C3.53501 21 3.30252 21 3.11177 20.9489C2.59413 20.8102 2.18981 20.4059 2.05111 19.8882C2 19.6975 2 19.465 2 19V14C2 13.535 2 13.3025 2.05111 13.1118C2.18981 12.5941 2.59413 12.1898 3.11177 12.0511C3.30252 12 3.53501 12 4 12C4.46499 12 4.69748 12 4.88823 12.0511C5.40587 12.1898 5.81019 12.5941 5.94889 13.1118C6 13.3025 6 13.535 6 14V19C6 19.465 6 19.6975 5.94889 19.8882C5.81019 20.4059 5.40587 20.8102 4.88823 20.9489C4.69748 21 4.46499 21 4 21Z"
            stroke="#F0F0F0"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      ),
    },
    {
      title: "CERTIFICATIONS",
      description: "Employees stay current with all required safety credentials",
      icon: (
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 20H5.2C4.0799 20 3.51984 20 3.09202 19.782C2.71569 19.5903 2.40973 19.2843 2.21799 18.908C2 18.4802 2 17.9201 2 16.8V7.2C2 6.0799 2 5.51984 2.21799 5.09202C2.40973 4.71569 2.71569 4.40973 3.09202 4.21799C3.51984 4 4.0799 4 5.2 4H18.8C19.9201 4 20.4802 4 20.908 4.21799C21.2843 4.40973 21.5903 4.71569 21.782 5.09202C22 5.51984 22 6.0799 22 7.2V8.27051M14.6895 18.3854V20.3175C14.6895 20.9869 14.6895 21.3216 14.827 21.556C14.9476 21.7616 15.1377 21.9173 15.3629 21.9951C15.6198 22.0838 15.9479 22.018 16.6043 21.8863L17.355 21.7356C17.4725 21.712 17.5313 21.7002 17.5906 21.6955C17.6433 21.6913 17.6962 21.6913 17.7489 21.6955C17.8082 21.7002 17.867 21.712 17.9846 21.7356L18.7353 21.8863C19.3916 22.018 19.7197 22.0838 19.9766 21.9951C20.2019 21.9173 20.3919 21.7616 20.5126 21.556C20.6501 21.3216 20.6501 20.9869 20.6501 20.3175V18.0864M6 8.27051H12M6 11.2705H9M6 14.2705H9M22 14.9088C22 17.3002 20.0614 19.2389 17.6699 19.2389C15.2785 19.2389 13.3398 17.3002 13.3398 14.9088C13.3398 12.5173 15.2785 10.5787 17.6699 10.5787C20.0614 10.5787 22 12.5173 22 14.9088Z"
            stroke="#F0F0F0"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      ),
    },
    {
      title: "COMMITMENT",
      description: "Company-wide dedication to maintaining top safety standards",
      icon: (
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9996 13.1698V12.9998C20.0006 11.9298 19.7869 10.8705 19.3712 9.88459C18.9556 8.89866 18.3463 8.00612 17.5796 7.25981C16.6845 6.38879 15.5942 5.74424 14.3996 5.37981H14.3496C13.512 5.11594 12.6377 4.98766 11.7596 4.99981C9.66799 5.11462 7.69937 6.02458 6.25676 7.54341C4.81414 9.06225 4.00665 11.0751 3.99959 13.1698C3.33126 13.4049 2.7677 13.869 2.40873 14.4798C2.04975 15.0906 1.91853 15.8087 2.0383 16.507C2.15808 17.2053 2.52112 17.8386 3.06312 18.2949C3.60512 18.7512 4.29112 19.0009 4.99959 18.9998H18.9996C19.7081 19.0009 20.3941 18.7512 20.9361 18.2949C21.4781 17.8386 21.8411 17.2053 21.9609 16.507C22.0807 15.8087 21.9494 15.0906 21.5905 14.4798C21.2315 13.869 20.6679 13.4049 19.9996 13.1698ZM18.9996 16.9998H4.99959C4.73438 16.9998 4.48002 16.8945 4.29249 16.7069C4.10495 16.5194 3.99959 16.265 3.99959 15.9998C3.99959 15.7346 4.10495 15.4802 4.29249 15.2927C4.48002 15.1052 4.73438 14.9998 4.99959 14.9998H6.99959C7.26481 14.9998 7.51916 14.8945 7.7067 14.7069C7.89424 14.5194 7.99959 14.265 7.99959 13.9998C7.99959 13.7346 7.89424 13.4802 7.7067 13.2927C7.51916 13.1052 7.26481 12.9998 6.99959 12.9998H5.99959C6.0452 11.9626 6.34206 10.952 6.86463 10.0549C7.38721 9.15784 8.11986 8.40111 8.99959 7.84981V10.9998C8.99959 11.265 9.10495 11.5194 9.29249 11.7069C9.48002 11.8945 9.73438 11.9998 9.99959 11.9998C10.2648 11.9998 10.5192 11.8945 10.7067 11.7069C10.8942 11.5194 10.9996 11.265 10.9996 10.9998V7.08981C11.271 7.04446 11.5448 7.01442 11.8196 6.99981H11.9996C12.3353 7.00289 12.67 7.03636 12.9996 7.09981V10.9998C12.9996 11.265 13.1049 11.5194 13.2925 11.7069C13.48 11.8945 13.7344 11.9998 13.9996 11.9998C14.2648 11.9998 14.5192 11.8945 14.7067 11.7069C14.8942 11.5194 14.9996 11.265 14.9996 10.9998V7.81981C15.4238 8.06544 15.8195 8.35721 16.1796 8.68981C16.7562 9.24971 17.2143 9.91973 17.527 10.6601C17.8396 11.4005 18.0003 12.1961 17.9996 12.9998H16.9996C16.7344 12.9998 16.48 13.1052 16.2925 13.2927C16.1049 13.4802 15.9996 13.7346 15.9996 13.9998C15.9996 14.265 16.1049 14.5194 16.2925 14.7069C16.48 14.8945 16.7344 14.9998 16.9996 14.9998H18.9996C19.2648 14.9998 19.5192 15.1052 19.7067 15.2927C19.8942 15.4802 19.9996 15.7346 19.9996 15.9998C19.9996 16.265 19.8942 16.5194 19.7067 16.7069C19.5192 16.8945 19.2648 16.9998 18.9996 16.9998Z"
            fill="#F0F0F0"
          />
        </svg>

      ),
    },
  ];

  return (
    <section id="safety" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col w-full items-start gap-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.45em] font-semibold text-secondary/70">
            A Priority in
          </span>
          <div className="flex w-full items-center gap-4">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-primary leading-none uppercase">
              Safety
            </h1>
          </div>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-secondary/70">
            Our Services Revole Around Safety
          </h2>
          <span className="h-[1px] w-44 bg-gradient-to-r from-secondary/80 via-secondary/30 to-transparent" />
        </div>


        {/* LEFT ITEMS + PARAGRAPH */}
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 md:gap-10 mb-12 md:mb-16">

          {/* LEFT LIST */}
          <div className="space-y-4 mt-10 lg:col-span-2 hidden lg:block">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(168,31,39,0.5)]"></span>
                <span className="text-primary font-semibold text-sm md:text-base uppercase tracking-[0.2em]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT PARAGRAPH */}
          <div className="space-y-10 mt-10 lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-secondary/15 bg-secondary p-5 shadow-[0_14px_28px_rgba(22,19,74,0.18)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />
              <p className="relative text-white text-sm md:text-base font-semibold leading-relaxed md:leading-6">
                Our clients can trust that we meet all safety training, certification, and third-party verification standards. Our goal is to be the safest rail service provider in the U.S. We emphasize safety daily, fostering a team approach and empowering employees to prioritize it, creating a positive safety culture.
              </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

              <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex items-center justify-center lg:justify-start">
                <h2 className="text-3xl md:text-5xl font-black text-primary capitalize leading-tight md:leading-[1.1] text-center lg:text-left">
                  How we ensure <br className="hidden sm:block" />safety excellence.
                </h2>
              </div>

              {boxes.map((box, index) => {

                return (
                  <div
                    key={index}
                    className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-secondary/15 bg-white/70 p-5 text-left shadow-[0_14px_28px_rgba(22,19,74,0.08)] backdrop-blur transition"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/30 to-transparent opacity-70" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white shadow-[0_10px_22px_rgba(22,19,74,0.35)]">
                      {box.icon}
                    </div>
                    <div className="relative">
                      <h3 className="text-primary font-black text-base leading-5 md:text-lg">
                        {box.title}
                      </h3>
                      <span className="mt-2 block h-[1px] w-14 bg-gradient-to-r from-secondary/50 via-secondary/30 to-transparent" />
                    </div>
                    <p className="relative text-secondary text-xs">
                      {box.description}
                    </p>
                  </div>
                );
              })}
            </div>


          </div>
        </div>

      </div>
    </section>
  );
}
