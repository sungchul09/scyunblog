import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          // Palette - Blue
          blue: {
            90: { value: "#0E4287" },
            80: { value: "#094EA8" },
            70: { value: "#0459C8" },
            60: { value: "#0064E5" },
            50: { value: "#1978F0" },
            40: { value: "#358BFA" },
            30: { value: "#5CA2FF" },
            20: { value: "#89BDFF" },
            10: { value: "#BCDAFF" },
            5: { value: "#F0F6FF" },
          },
          // Palette - Red
          red: {
            90: { value: "#87120C" },
            80: { value: "#A4160E" },
            70: { value: "#BF1C13" },
            60: { value: "#D7261C" },
            50: { value: "#EB342A" },
            40: { value: "#FB493F" },
            30: { value: "#FF6C64" },
            20: { value: "#FF9690" },
            10: { value: "#FFC5C1" },
            5: { value: "#FFF3F3" },
          },
          // Palette - Orange
          orange: {
            90: { value: "#870000" },
            80: { value: "#B11002" },
            70: { value: "#DD2A0A" },
            60: { value: "#EB4D1B" },
            50: { value: "#F5692D" },
            40: { value: "#FB947A" },
            30: { value: "#FCA595" },
            20: { value: "#FDB8B0" },
            10: { value: "#FED0CD" },
            5: { value: "#FFEBEB" },
          },
          // Palette - Yellow
          yellow: {
            90: { value: "#7E5400" },
            80: { value: "#9F6A04" },
            70: { value: "#BD800B" },
            60: { value: "#D69518" },
            50: { value: "#EAA92C" },
            40: { value: "#FBBD48" },
            30: { value: "#FFCF6F" },
            20: { value: "#FFE19C" },
            10: { value: "#FFF2CF" },
            5: { value: "#FFF9E7" },
          },
          // Palette - Green
          green: {
            90: { value: "#005F00" },
            80: { value: "#007D00" },
            70: { value: "#0E8E00" },
            60: { value: "#22A012" },
            50: { value: "#2EAF1D" },
            40: { value: "#54BB47" },
            30: { value: "#75C769" },
            20: { value: "#9ED695" },
            10: { value: "#C5E6BF" },
            5: { value: "#E6F5E5" },
          },
          // Palette - Mint
          mint: {
            90: { value: "#08463B" },
            80: { value: "#17695C" },
            70: { value: "#2D8879" },
            60: { value: "#31A894" },
            50: { value: "#43C1AC" },
            40: { value: "#5BD5C1" },
            30: { value: "#7CE4D3" },
            20: { value: "#A6F0E3" },
            10: { value: "#D6F8F2" },
            5: { value: "#EAFBF8" },
          },
          // Palette - Navy
          navy: {
            90: { value: "#132342" },
            80: { value: "#2A4B95" },
            70: { value: "#4370DF" },
            60: { value: "#5784F6" },
            50: { value: "#729AFF" },
            40: { value: "#99BAFF" },
            30: { value: "#AEC9FF" },
            20: { value: "#C3D7FF" },
            10: { value: "#DBE7FF" },
            5: { value: "#F2F7FF" },
          },
          // Palette - Violet
          violet: {
            90: { value: "#330066" },
            80: { value: "#4E0089" },
            70: { value: "#7301B2" },
            60: { value: "#8C07C1" },
            50: { value: "#A31DB9" },
            40: { value: "#A541A5" },
            30: { value: "#B061BC" },
            20: { value: "#BF87D2" },
            10: { value: "#D5B3E9" },
            5: { value: "#F2E6FF" },
          },
          // Palette - Indigo
          indigo: {
            90: { value: "#2E098B" },
            80: { value: "#2B21B6" },
            70: { value: "#4230C3" },
            60: { value: "#5E46D0" },
            50: { value: "#8165DD" },
            40: { value: "#A88EEA" },
            30: { value: "#BDA3EF" },
            20: { value: "#D0B9F5" },
            10: { value: "#E3D0FA" },
            5: { value: "#F4E9FF" },
          },
          // Palette - Grey
          grey: {
            90: { value: "#1A1A1A" },
            80: { value: "#333333" },
            70: { value: "#5A5A5A" },
            60: { value: "#8A8A8A" },
            50: { value: "#A5A5A5" },
            40: { value: "#BCBCBC" },
            30: { value: "#CFCFCF" },
            20: { value: "#DFDFDF" },
            10: { value: "#ECECEC" },
            5: { value: "#F7F7F7" },
          },
          // Palette - Cool Grey
          coolGrey: {
            90: { value: "#111927" },
            80: { value: "#1F2A37" },
            70: { value: "#364452" },
            60: { value: "#4D5762" },
            50: { value: "#6A737D" },
            40: { value: "#9DA2AC" },
            30: { value: "#CFD2D9" },
            20: { value: "#DBDDE2" },
            10: { value: "#EBECEF" },
            5: { value: "#F6F8FA" },
          },
          // BW
          black: { value: "#000000" },
          white: { value: "#FFFFFF" },
          // Brand - Primary
          brand: {
            blue: { value: "#1978F0" },
            red: { value: "#EB342A" },
            orange: { value: "#F5692D" },
            yellow: { value: "#FBBD48" },
            green: { value: "#22A012" },
            mint: { value: "#43C1AC" },
            navy: { value: "#132342" },
            violet: { value: "#A541A5" },
            indigo: { value: "#6C4CDA" },
          },
          // Brand - Additional Light
          brandLight: {
            blue: { value: "#57CAFF" },
            red: { value: "#FF7DB1" },
            orange: { value: "#FBBD48" },
            yellow: { value: "#FFD527" },
            green: { value: "#5BDE6E" },
            mint: { value: "#41E1B9" },
            navy: { value: "#89BDFF" },
            violet: { value: "#CE82FF" },
            indigo: { value: "#6C4CDA" },
            sky: { value: "#8EE1F6" },
          },
          // Brand - Additional Soft
          brandSoft: {
            blue: { value: "#E2F0F3" },
            red: { value: "#F2E6E6" },
            orange: { value: "#FAF0EB" },
            yellow: { value: "#FFFAEB" },
            green: { value: "#EAF1EA" },
            mint: { value: "#E8F3F0" },
            navy: { value: "#EBF0F5" },
            violet: { value: "#F5EFF6" },
          },
          // Brand - Additional Pastel
          brandPastel: {
            blue: { value: "#78A0E6" },
            red: { value: "#F58C82" },
            orange: { value: "#FA9B73" },
            yellow: { value: "#F9DD71" },
            green: { value: "#69CA90" },
            mint: { value: "#91E6D7" },
            navy: { value: "#506482" },
            violet: { value: "#D1A1D1" },
          },
        },
      },
      semanticTokens: {
        colors: {
          // System Tint
          system: {
            blue: {
              value: { base: "{colors.blue.50}", _dark: "{colors.blue.50}" },
            },
            red: {
              value: { base: "{colors.red.50}", _dark: "{colors.red.50}" },
            },
            orange: {
              value: {
                base: "{colors.orange.50}",
                _dark: "{colors.orange.50}",
              },
            },
            yellow: {
              value: {
                base: "{colors.yellow.40}",
                _dark: "{colors.yellow.40}",
              },
            },
            green: {
              value: { base: "{colors.green.60}", _dark: "{colors.green.60}" },
            },
            mint: {
              value: { base: "{colors.mint.50}", _dark: "{colors.mint.50}" },
            },
            navy: {
              value: { base: "{colors.navy.90}", _dark: "{colors.navy.80}" },
            },
            violet: {
              value: {
                base: "{colors.violet.40}",
                _dark: "{colors.violet.40}",
              },
            },
            indigo: {
              value: {
                base: "{colors.indigo.80}",
                _dark: "{colors.indigo.50}",
              },
            },
            grey: {
              value: { base: "{colors.grey.50}", _dark: "{colors.grey.40}" },
            },
            inverse: {
              value: { base: "{colors.black}", _dark: "{colors.white}" },
            },
          },
          // Background
          bg: {
            default: {
              base: {
                value: { base: "{colors.white}", _dark: "{colors.grey.90}" },
              },
              elevated: {
                value: { base: "{colors.white}", _dark: "{colors.grey.80}" },
              },
            },
            grouped: {
              base: {
                value: { base: "{colors.grey.5}", _dark: "{colors.black}" },
              },
              upperbase: {
                value: { base: "{colors.white}", _dark: "{colors.grey.90}" },
              },
              elevated: {
                value: { base: "{colors.white}", _dark: "{colors.grey.80}" },
              },
            },
          },
          // Label
          label: {
            primary: {
              value: { base: "{colors.grey.90}", _dark: "{colors.grey.5}" },
            },
            secondary: {
              value: {
                base: "rgba(26, 26, 26, 0.57)",
                _dark: "rgba(247, 247, 247, 0.60)",
              },
            },
            tertiary: {
              value: {
                base: "rgba(26, 26, 26, 0.29)",
                _dark: "rgba(247, 247, 247, 0.30)",
              },
            },
            onTint: {
              primary: {
                value: { base: "{colors.grey.5}", _dark: "{colors.grey.90}" },
              },
              secondary: {
                value: {
                  base: "rgba(247, 247, 247, 0.60)",
                  _dark: "rgba(26, 26, 26, 0.57)",
                },
              },
              tertiary: {
                value: {
                  base: "rgba(247, 247, 247, 0.30)",
                  _dark: "rgba(26, 26, 26, 0.29)",
                },
              },
            },
          },
          // Overlay
          overlay: {
            thick: {
              value: {
                base: "rgba(51, 51, 51, 0.9)",
                _dark: "rgba(90, 90, 90, 0.9)",
              },
            },
            basic: {
              value: {
                base: "rgba(26, 26, 26, 0.4)",
                _dark: "rgba(26, 26, 26, 0.6)",
              },
            },
            thin: {
              value: {
                base: "rgba(90, 90, 90, 0.05)",
                _dark: "rgba(90, 90, 90, 0.28)",
              },
            },
            thinYellow: {
              value: {
                base: "rgba(251, 189, 72, 0.12)",
                _dark: "rgba(255, 225, 156, 0.16)",
              },
            },
            thinRed: {
              value: {
                base: "rgba(235, 52, 42, 0.08)",
                _dark: "rgba(255, 150, 144, 0.16)",
              },
            },
            thinBlue: {
              value: {
                base: "rgba(25, 120, 240, 0.08)",
                _dark: "rgba(137, 189, 255, 0.16)",
              },
            },
          },
          // Separator
          separator: {
            value: {
              base: "rgba(26, 26, 26, 0.08)",
              _dark: "rgba(247, 247, 247, 0.10)",
            },
          },
          // State
          state: {
            hover: {
              value: {
                base: "rgba(90, 90, 90, 0.08)",
                _dark: "rgba(90, 90, 90, 0.18)",
              },
            },
            focus: {
              value: {
                base: "rgba(90, 90, 90, 0.12)",
                _dark: "rgba(90, 90, 90, 0.30)",
              },
            },
            onTint: {
              hover: {
                value: {
                  base: "rgba(26, 26, 26, 0.08)",
                  _dark: "rgba(26, 26, 26, 0.08)",
                },
              },
              focus: {
                value: {
                  base: "rgba(26, 26, 26, 0.12)",
                  _dark: "rgba(26, 26, 26, 0.12)",
                },
              },
            },
          },
        },
      },
    },
  },
  outdir: "styled-system",
});
