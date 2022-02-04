import React from "react";

function Slider() {
  return (
    <div className="relative inset-0">
      <div className="absolute inset-y-0 right-0 max-w-6">
        <header className="border mt-2">
          <div>
            <h2>New Project</h2>
            <span>
              <button aria-label="Close panel">
                <p className="h-6 w-6">toggle</p>
              </button>
            </span>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Slider;
