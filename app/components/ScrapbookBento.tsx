// E:\my-digital-marketing-portfolio\app\components\ScrapbookBento.tsx
"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAnyWhere, useMediaQuery } from "usehooks-ts";
import Image from "next/image";
import { cn } from "../lib/utils";
import { useRotationVelocity } from "../lib/useRotationVelocity";
import { getRandomNumberInRange } from "../lib/getRandomNumberInRange";
import { useElementBoundingRect } from "../lib/useelementBoundingRect";
import { BentoCard } from "./BentoCard";

// Sticker Component (now defined within this file)
function Sticker({
  children,
  index = 1,
  caption,
  className,
  preventYOffsetOnMobile: preventYOffset,
  fixedRotation, // New prop for fixed rotation
  fixedY, // New prop for fixed Y offset
}: {
  children: React.ReactNode;
  index?: number;
  caption?: string;
  className?: string;
  preventYOffsetOnMobile?: boolean;
  fixedRotation?: number; // Type for new prop
  fixedY?: number; // Type for new prop
}) {
  // Create refs for the sticker and caption, and set up measurement of elements
  const itemRef = useRef<HTMLDivElement | null>(null);
  const boundingRect = useElementBoundingRect(itemRef);

  // Manage state of stickers
  const [isDragging, setIsDragging] = useState<Boolean>(false);
  const [isCaptionVisible, setIsCaptionVisible] = useState<Boolean>(false);
  const [isModal, setIsModal] = useState<Boolean>(false);

  // Set up initial values persisted in state even while dragging
  // Use fixed values if provided, otherwise use random
  const [initialRotation] = useState<number>(
    fixedRotation !== undefined
      ? fixedRotation
      : getRandomNumberInRange(-15, 15),
  );
  const [initialY] = useState<number>(
    fixedY !== undefined
      ? fixedY
      : getRandomNumberInRange(10, 25) *
          (index === 0 ? 1 : (index || 0) % 2 === 0 ? -0.5 : 0.5),
  );

  // Handle smaller devices with different behavior
  const matches = useMediaQuery("(max-width: 768px)");

  function onOpen() {
    if (matches) {
      setIsModal(!isModal);
      setIsCaptionVisible(!isModal);
    }
  }

  function onStart() {
    if (!matches) {
      setIsCaptionVisible(true);
      setIsDragging(true);
    }
  }

  function onEnd() {
    if (!matches) {
      setIsCaptionVisible(false);
      setIsDragging(false);
    }
  }

  useClickAnyWhere((e) => {
    if (
      e.target != itemRef.current &&
      !itemRef.current?.contains(e.target as Node) &&
      isModal &&
      matches
    ) {
      setIsModal(false);
      setIsCaptionVisible(false);
    }
  });

  // Setup rotation based on speed of drag
  const { rotate, x } = useRotationVelocity(initialRotation);

  const stickerVariants = {
    default: {},
    modal: {
      x: -boundingRect.x / 2 + boundingRect.width,
      rotate: 0,
      scale: 1.2,
      zIndex: 1000,
    },
    dragging: {
      scale: 1.2,
      zIndex: 1000,
    },
  };

  return (
    <motion.div
      ref={itemRef}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.9,
          y: 10,
        },
        shown: {
          opacity: 1,
          scale: 1,
          y: matches && preventYOffset ? Math.abs(initialY) : initialY,
        },
      }}
      style={{
        zIndex: isModal || isDragging ? 1000 : undefined,
      }}
      className={cn("relative cursor-grab active:cursor-grabbing", className)}
    >
      <motion.div
        variants={stickerVariants}
        className={cn(
          "flex-shrink-1 relative h-fit min-w-[96px] drop-shadow-lg",
        )}
        drag={!matches}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragTransition={{
          power: 0.1,
          bounceStiffness: 200,
        }}
        dragElastic={0.8}
        style={{
          rotate: isModal ? 0 : rotate,
          x,
        }}
        animate={
          matches
            ? isModal
              ? "modal"
              : "default"
            : isDragging
              ? "dragging"
              : "default"
        }
        onTap={onOpen}
        onHoverStart={onStart}
        onHoverEnd={onEnd}
        onDragEnd={onEnd}
      >
        <div className="pointer-events-none select-none">{children}</div>

        <AnimatePresence>
          {caption && caption.length > 0 && isCaptionVisible && (
            <motion.div
              key="child"
              initial={{ opacity: 0, y: -48, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 0.9 }}
              exit={{ opacity: 0, y: -48, scale: 0.5 }}
              style={{
                left: `50%`,
                x: `-50%`,
              }}
              className={cn(
                "pointer-events-none absolute top-full z-10 mx-auto mt-2 min-w-[160px] max-w-screen-sm select-none text-balance rounded-sm bg-white/95 px-3 py-2 text-center text-[10px] text-black backdrop-blur-3xl",
              )}
            >
              {caption}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

// ScrapbookBento Component
export function ScrapbookBento({ className }: { className?: string }) {
  const [resetIndex, setResetIndex] = useState<number>(0);

  const container = {
    hidden: { opacity: 0 },
    shown: {
      opacity: 1,
      transition: {
        delayChilcren: 0,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <BentoCard
      colSpan={9}
      rowSpan={4}
      height="h-[220px]"
      showHoverGradient={false}
      hideOverflow={false}
    >
      <h2 className="mb-2 font-medium">Certificates</h2>
      <div className="absolute top-0 h-[220px] w-full overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:14px_14px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black_40%,transparent_100%)]"></div>
      <div
        key={resetIndex}
        className={cn(
          "bg-secondary @container xs:max-h-none w-full rounded-3xl p-6",
          className,
        )}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="shown"
          className="-mt-8 grid h-full w-full grid-cols-3 items-center gap-4"
        >
          {/* Certificate 1 */}
          <Sticker fixedRotation={-5} fixedY={15}>
            <div className="relative h-[120px] w-[120px]">
              <Image
                src="/certificate1.png" // Update path!
                alt="Certificate 1"
                fill
                className="rounded-md object-contain shadow-md"
                draggable={false}
              />
            </div>
          </Sticker>
          {/* Certificate 2 */}
          <Sticker fixedRotation={-5} fixedY={15}>
            <div className="relative h-[120px] w-[120px]">
              <Image
                src="/certificate2.png" // Update path!
                alt="Certificate 2"
                fill
                className="rounded-md object-contain shadow-md"
                draggable={false}
              />
            </div>
          </Sticker>
          {/* Certificate 3 */}
          <Sticker fixedRotation={-5} fixedY={15}>
            <div className="relative h-[120px] w-[120px]">
              <Image
                src="/certificate3.png" // Update path!
                alt="Certificate 3"
                fill
                className="rounded-md object-contain shadow-md"
                draggable={false}
              />
            </div>
          </Sticker>
        </motion.div>
      </div>
    </BentoCard>
  );
}
