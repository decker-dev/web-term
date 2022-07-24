export default interface Command {
  name: string;
  description: string;
  action: () => Promise<void>;
}
