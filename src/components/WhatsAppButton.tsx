export default function WhatsAppButton() {
  const phoneNumber = "919847666191";
  const message =
    "Hello PR Constructions, I would like to know more about your construction services.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <span className="absolute right-16 bottom-1/2 translate-y-1/2 whitespace-nowrap bg-black text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none">
        Chat with us
      </span>

      {/* Button */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70 animate-ping"></span>

        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6 fill-white relative z-10"
        >
          <path d="M16.003 2.667c-7.365 0-13.333 5.968-13.333 13.333 0 2.352.619 4.561 1.693 6.483L2.667 29.333l7.058-1.657a13.264 13.264 0 006.278 1.605h.001c7.365 0 13.333-5.968 13.333-13.333S23.369 2.667 16.003 2.667zm7.733 18.875c-.325.918-1.885 1.75-2.598 1.858-.667.1-1.533.143-2.471-.157-.571-.181-1.303-.427-2.254-.836-3.968-1.715-6.553-5.714-6.754-5.981-.2-.267-1.616-2.15-1.616-4.1s1.02-2.905 1.383-3.301c.363-.396.793-.495 1.057-.495.264 0 .528.003.758.014.243.012.568-.092.89.682.325.78 1.104 2.695 1.201 2.889.097.194.162.421.032.688-.13.267-.194.431-.383.66-.194.23-.407.512-.58.688-.194.194-.395.403-.17.791.226.387 1.004 1.657 2.155 2.683 1.48 1.32 2.726 1.729 3.114 1.923.387.194.613.162.84-.097.226-.259.97-1.128 1.23-1.514.259-.387.518-.323.873-.194.355.13 2.251 1.062 2.635 1.256.387.194.645.291.743.452.097.162.097.94-.228 1.858z" />
        </svg>
      </a>
    </div>
  );
}
