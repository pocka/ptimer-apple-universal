// SPDX-FileCopyrightText: 2024 Shota FUJI <pockawoooh@gmail.com>
//
// SPDX-License-Identifier: Apache-2.0

import { type Meta, type StoryObj } from "@storybook/html";

import { story } from "./button.gleam";

interface Args {
	variant: "primary" | "normal";

	state: "disabled" | "enabled" | "loading";

	size: "small" | "medium";
}

export default {
	render(args, ctx) {
		return story(args, ctx);
	},
	args: {
		variant: "primary",
		state: "enabled",
		size: "medium",
	},
	argTypes: {
		variant: {
			control: "radio",
			options: ["primary", "normal"],
		},
		state: {
			control: "radio",
			options: ["enabled", "disabled", "loading"],
		},
		size: {
			control: "radio",
			options: ["small", "medium"],
		},
	},
} satisfies Meta<Args>;

type Story = StoryObj<Args>;

export const Primary: Story = {};

export const Normal: Story = {
	args: {
		variant: "normal",
	},
};

export const Small: Story = {
	args: {
		size: "small",
	},
};
