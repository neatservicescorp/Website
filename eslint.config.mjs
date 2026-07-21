import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		files: ["app/components/GoogleMap.tsx"],
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/prefer-optional-chain": "off",
		},
	},
];

export default eslintConfig;
