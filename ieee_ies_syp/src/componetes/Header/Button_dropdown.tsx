interface ButtonDropdownProps {
  label: string;
}

export default function ButtonDropdown({ label }: ButtonDropdownProps) {
  return (
    <button
      className="text-gray-500 hover:text-black text-xl flex items-center gap-1"
      type="button"
      aria-haspopup="menu"
      aria-expanded="false"
      data-state="closed"
      data-slot="dropdown-menu-trigger"
    >
      {label}
      <svg
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}
