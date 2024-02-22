export default class InputFieldBuilder {
  public fields: { label: string; name: string; type: string; value: string }[];
  private label!: string ;
  private name!: string;
  private type!: string;
  private value!: string;

  constructor() {
    this.fields = [];
  }

  public setLabel(label: string): this {
    this.label = label;
    return this;
  }

  public setName(name: string): this {
    this.name = name;
    return this;
  }

  public setType(type: string): this {
    this.type = type;
    return this;
  }

  public setValue(value: string): this {
    this.value = value;
    return this;
  }

  public build(): InputFieldBuilder {
    this.fields.push({
      label: this.label,
      name: this.name,
      type: this.type,
      value: this.value,
    });
    return this;
  }
}
