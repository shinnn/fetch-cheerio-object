function drink(numShots, withChaser=false) {
  orderShots(numShots);
  if (withChaser) {
    orderChaser();
  }
}
