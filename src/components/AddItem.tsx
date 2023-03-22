import { FAST_ADD_ITEM_MODAL_ID } from "~/const/modalIds";

export const AddItem = () => {
  return (
    <div>
      <div className="dropdown-top dropdown-end dropdown fixed bottom-4 right-4 w-12">
        <button tabIndex={0} className="btn-primary btn-circle btn">
          <svg
            width="40"
            height="40"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200 350C282.843 350 350 282.843 350 200C350 117.157 282.843 50 200 50C117.157 50 50 117.157 50 200C50 282.843 117.157 350 200 350Z"
              stroke="hsl(var(--pc))"
              strokeWidth="12"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M200 125.03V282.8"
              stroke="hsl(var(--a))"
              strokeWidth="12"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M278.89 203.91H121.11"
              stroke="hsl(var(--a))"
              strokeWidth="12"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div tabIndex={0} className="dropdown-content">
          <label
            htmlFor={FAST_ADD_ITEM_MODAL_ID}
            className="btn-primary btn-circle btn mb-2"
          >
            <svg
              width="38"
              height="38"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M160.12 284.22C150.42 293.92 109.22 299.98 109.22 299.98C109.22 299.98 115.28 258.79 124.98 249.08C134.68 239.38 150.41 239.38 160.11 249.08C169.82 258.79 169.82 274.52 160.12 284.22Z"
                stroke="hsl(var(--a))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M77.73 284.44L50 312.17"
                stroke="hsl(var(--a))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M135.84 319.77L115.39 340.21"
                stroke="hsl(var(--a))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M77.6299 331.57L57.1799 352.02"
                stroke="hsl(var(--a))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M186.74 142.03L147.65 135.2L107.04 179.8L146.04 187.23L186.74 142.03Z"
                stroke="hsl(var(--a))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M266.66 221.94L273.48 261.04L228.88 301.65L221.45 262.65L266.66 221.94Z"
                stroke="hsl(var(--a))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M198.893 256.712L152.175 209.994L136.604 225.564L183.322 272.283L198.893 256.712Z"
                stroke="hsl(var(--pc))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M344.74 64.1501C347.63 67.0401 349.42 70.8701 349.72 74.9501C350.95 91.6101 349.87 137.12 309.33 180.22C270.17 221.85 212.72 270.55 212.72 270.55L138.34 196.17C138.34 196.17 187.04 138.72 228.67 99.5601C271.77 59.0101 317.29 57.9401 333.94 59.1701C338.02 59.4701 341.85 61.2501 344.74 64.1501Z"
                stroke="hsl(var(--pc))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M226.4 181.68L169.91 238.98"
                stroke="hsl(var(--a))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M289.47 143.59C302.819 143.59 313.64 132.769 313.64 119.42C313.64 106.071 302.819 95.25 289.47 95.25C276.121 95.25 265.3 106.071 265.3 119.42C265.3 132.769 276.121 143.59 289.47 143.59Z"
                stroke="hsl(var(--a))"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};
