export {}
declare global {
  interface Window {
    $message: import('naive-ui').MessageApi;
    $dialog: import('naive-ui').DialogApiInjection;
    $notification: import('naive-ui').NotificationProviderInst;
    $loadingBar: import('naive-ui').LoadingBarApi;
  }
}
