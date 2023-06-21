class Instrument {
  constructor(name) {
    this.name = name;
  }

  //
  Play(sound) {
    const audio = new Audio(sound);
    audio.play();
  }

  ToString() {
    console.log(`| Name: ${this.name} |`);
  }
}

class Stringed extends Instrument {
  constructor(name, numberOfStrings) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }

  ToString() {
    console.log(
      `| Name: ${this.name} | Number of Strings: ${this.numberOfStrings} |`
    );
  }
}

class Harp extends Stringed {
  constructor(name, numberOfStrings, height) {
    super(name, numberOfStrings);
    this.height = height;
  }

  ToString() {
    console.log(
      `| Name: ${this.name} | Number of Strings: ${this.numberOfStrings} | Height: ${this.height} |`
    );
  }
}

class Guitar extends Stringed {
  constructor(name, numberOfStrings, material) {
    super(name, numberOfStrings);
    this.material = material;
  }

  ToString() {
    console.log(
      `| Name: ${this.name} | Number of Strings: ${this.numberOfStrings} | Material: ${this.material} |`
    );
  }
}

class Flute extends Instrument {
  constructor(name, holes, material) {
    super(name);
    this.holes = holes;
    this.material = material;
  }

  ToString() {
    console.log(
      `| Name: ${this.name} | Holes: ${this.holes} | Material: ${this.material} |`
    );
  }
}

class Saxophone extends Instrument {
  constructor(name, material) {
    super(name);
    this.material = material;
  }

  ToString() {
    console.log(`| Name: ${this.name} | Material: ${this.material} |`);
  }
}

// Create an array of instrument objects
const instruments = [
  new Harp("Concert Harp", 47, "180 cm"),
  new Guitar("Acoustic Guitar", 6, "Rosewood"),
  new Flute("Silver Flute", 16, "Silver"),
  new Saxophone("Alto Saxophone", "Brass"),
];

// Call the ToString method for each instrument
instruments.forEach((instrument) => {
  instrument.ToString();
});

function playInstrument(index, soundFile) {
  const instrument = instruments[index];
  instrument.Play(soundFile);
}
