const items = [
  { name: "Door to door" },
  { name: "Door to door" },
  { name: "Door to door" },
  { name: "Door to door" },
  { name: "Door to door" },
  { name: "Door to door" },
];

const DetailCard = () => {
  return (
    <div className="bg-card p-7 rounded-md shadow-lg shadow-blue-200">
      <h1 className="font-medium text-xl border-b pb-5">Details</h1>
      {items.map((el, index) => {
        return (
          <div key={index} className="item-style">
            <div className="text-muted-foreground">{el.name}</div>
            <div>620mi</div>
          </div>
        );
      })}
      <div className="item-style py-5 bg-secondary mb-2">
        <div className="text-muted-foreground">Due now</div>
        <div className="flex items-center gap-3"><span className="text-4xl font-semibold">$0</span> <span className="text-xs font-light">Don't worry - you won't pay until your pickup is scheduled</span></div>
      </div>
      <div className="item-style py-5 bg-secondary">
        <div className="text-muted-foreground">Price option</div>
        <div className="flex items-center gap-3"><span className="text-lg font-semibold">$ 749</span> <span className="text-xs font-light">Regular price</span></div>
      </div>
    </div>
  );
};

export default DetailCard;
