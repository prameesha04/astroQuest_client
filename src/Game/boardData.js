const boardData = Array.from({ length: 30 }, (_, i) => {
  if (i === 3) return { id: i, type: "rocket", to: 10 };
  if (i === 8) return { id: i, type: "blackhole", to: 2 };
  if (i === 14) return { id: i, type: "rocket", to: 22 };
  if (i === 18) return { id: i, type: "blackhole", to: 9 };
  if (i === 29) return { id: i, type: "home" };
  return { id: i, type: "normal" };
});

export default boardData;
