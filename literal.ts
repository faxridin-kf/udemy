interface interfaceAction {
  letter: string;
}
type action = "up" | "down";
function actionType(action: action | interfaceAction) {
  switch (action) {
    case "down":
      return -1;
    case "up":
      return 1;
  }
}
