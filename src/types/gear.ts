export interface Gear {
	name: string;
	slug: string;
	price: number;
	imageUrl: string;
	url: string;
	description: string;
}

export type Gears = Gear[];

export interface Microphone extends Gear {
	type: 'usb' | 'xlr';
}

export type Microphones = Microphone[];
