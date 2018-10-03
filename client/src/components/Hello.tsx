import * as React from "react";
import "./Hello.css";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

interface State {
  currentEnthusiam: number;
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentEnthusiam: props.enthusiasmLevel || 1 };
  }

  public render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error("You could be a little more enthusiastic.");
    }
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + this.state.currentEnthusiam}!
        </div>

        <button onClick={this.props.onDecrement}>-</button>
        <button onClick={this.props.onIncrement}>+</button>
      </div>
    );
  }
}

export default Hello;
