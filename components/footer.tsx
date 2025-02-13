export default function Footer() {
  return (
    <footer className="flex justify-center bg-gray-200 dark:bg-neutral-950 py-4 border-t border-gray-600 dark:border-gray-700">
      <a
        href="/privacy"
        className="mx-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
      >
        Privacy
      </a>
      <a
        href="/how-xenon-search-works"
        className="mx-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
      >
        How Xenon Search works?
      </a>
      <a
        href="/about"
        className="mx-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
      >
        About
      </a>
      <a
        href="/feedback"
        className="mx-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
      >
        Feedback
      </a>
      <a
        href="/support"
        className="mx-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
      >
        Support
      </a>
    </footer>
  );
}
