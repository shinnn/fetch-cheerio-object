var addOne = x => x + 1;

function Coffee() {
  this.addSugar = numPackets => {
    this.numPackets += numPackets;
  };
}
