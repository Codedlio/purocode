import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/inicio">
              <p className="text-base font-bold">PRACTICA</p>
            </Link>
          </li>
          <li>
            <Link href="/acerca">
              <p className="text-base font-bold">QUIZ</p>
            </Link>
          </li>
          <li>
            <Link href="/play">
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_30_6)">
                  <path
                    d="M39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20Z"
                    fill="#323232"
                  />
                  <path
                    d="M32 19.5L13.25 30.3253V8.67468L32 19.5Z"
                    fill="#FCF932"
                  />
                  <path d="M22 19.5L33 16V23L22 19.5Z" fill="#3475D7" />
                </g>
                <path
                  d="M20 39.5C30.7696 39.5 39.5 30.7696 39.5 20C39.5 9.23045 30.7696 0.5 20 0.5C9.23045 0.5 0.5 9.23045 0.5 20C0.5 30.7696 9.23045 39.5 20 39.5Z"
                  stroke="black"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/contacto">
              <p className="text-base font-bold">CONTACTO</p>
            </Link>
          </li>
          <li>
            <Link href="/mas">
              <p className="text-base font-bold">MAS</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
