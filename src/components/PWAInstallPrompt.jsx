import React, { useEffect, useState, useCallback } from "react";

/**
 * PWA Install Prompt
 * Handles beforeinstallprompt events and shows a persistent install CTA
 * across all modern browsers including Chrome, Edge, Samsung Internet.
 */
const PWAInstallPrompt = () => {
  const [promptEvent, setPromptEvent] = useState(null);
  const [visible, setVisible] = useState(false);

  // Detect if app is already installed
  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent Chrome's default mini-info bar
      e.preventDefault();
      setPromptEvent(e);
      setVisible(true);
    };

    // Listen for install prompt
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Handle successful installation
    window.addEventListener("appinstalled", () => {
      console.log("✅ PWA installed successfully");
      setVisible(false);
    });

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstall = useCallback(async () => {
    if (!promptEvent) return;

    promptEvent.prompt();
    const { outcome } = await promptEvent.userChoice;

    console.log(`[PWA] User choice: ${outcome}`);
    setPromptEvent(null);

    // Hide button whether accepted or dismissed
    setVisible(false);
  }, [promptEvent]);

  // Don’t render if not installable or already installed
  if (!visible || isStandalone) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
      <button
        onClick={handleInstall}
        aria-label="Install Tickr App"
        className="w-full max-w-sm bg-[#172842] text-white font-semibold py-3 rounded-full shadow-lg hover:bg-[#1e3b5b] active:scale-[0.98] transition-all"
      >
        📲 Install Tickr
      </button>
    </div>
  );
};

export default PWAInstallPrompt;
