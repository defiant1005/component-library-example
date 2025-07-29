<script lang="ts" setup>
import { computed, PropType } from "vue";
import { RouteLocationRaw } from "vue-router";
import {
  ButtonColors,
  ButtonSizes,
  ButtonTypes,
  Targets,
} from "@/components/ui-button/types.ts";

const props = defineProps({
  color: {
    type: String as PropType<ButtonColors>,
    default: ButtonColors.ACCENT,
  },

  label: {
    type: String,
    required: true,
  },

  type: {
    type: String as PropType<ButtonTypes>,
    default: ButtonTypes.BUTTON,
  },

  size: {
    type: String as PropType<ButtonSizes>,
    default: ButtonSizes.MEDIUM,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  href: {
    type: String,
    default: "",
  },

  to: {
    type: Object as PropType<RouteLocationRaw>,
    default: null,
  },

  target: {
    type: String as PropType<Targets>,
    default: Targets.BLANK,
  },

  fullWidth: {
    type: Boolean,
    default: false,
  },

  dataTestId: {
    type: String,
    default: "",
  },
});

defineOptions({
  name: "UiButton",
});

const currentTag = computed(() => {
  if (props.href && !props.to) {
    return "a";
  } else if (!props.href && props.to) {
    return "router-link";
  } else {
    return "button";
  }
});

const filteredProps = computed(() => {
  return {
    ...(currentTag.value === "button" && {
      type: props.type,
      disabled: props.disabled,
    }),

    ...(currentTag.value !== "button" && {
      target: props.target,
    }),

    ...(currentTag.value === "router-link" && {
      to: props.to,
    }),

    ...(currentTag.value === "a" && {
      href: props.href,
    }),
  };
});
</script>

<template>
  <component
    :is="currentTag"
    class="ui-button"
    :class="[
      `ui-button_color_${color}`,
      `ui-button__size_${size}`,

      {
        'ui-button_full-width': fullWidth,
      },
    ]"
    :data-test-id="dataTestId"
    v-bind="filteredProps"
  >
    <slot />
    <span class="ui-button__label">{{ label }}</span>
  </component>
</template>

<style lang="scss" scoped>
.ui-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 8px;
  -webkit-tap-highlight-color: rgb(0 0 0 / 0%);

  &_full-width {
    width: 100%;
  }

  &_color {
    &_accent {
      // color: var(--color-semantic-content-normal-static-dark);
      // background-color: var(--color-semantic-background-normal-brand);

      &:deep(.icon) {
        // background-color: var(--color-semantic-content-normal-static-dark);
      }

      @media (hover: hover) {
        &:hover {
          // background-color: var(--color-semantic-background-hover-brand);
        }

        &:active {
          // background-color: var(--color-semantic-background-active-brand);
        }
      }

      @media (hover: none) {
        &:active {
          // background-color: var(--color-semantic-background-active-brand);
        }
      }
    }

    &_primary {
      // color: var(--color-semantic-content-normal-contrast-primary);
      // background-color: var(--color-semantic-background-normal-contrast);

      &:deep(.icon) {
        // background-color: var(--color-semantic-content-normal-contrast-primary);
      }

      @media (hover: hover) {
        &:hover {
          // background-color: var(--color-semantic-background-hover-contrast);
        }

        &:active {
          // background-color: var(--color-semantic-background-active-contrast);
        }
      }

      @media (hover: none) {
        &:active {
          // background-color: var(--color-semantic-background-active-contrast);
        }
      }
    }

    &_secondary {
      // color: var(--color-semantic-content-normal-primary);
      // border: 2px solid var(--color-semantic-border-normal-soft);

      &:deep(.icon) {
        // background-color: var(--color-semantic-content-normal-primary);
      }

      @media (hover: hover) {
        &:hover {
          // border-color: var(--color-semantic-border-hover-soft);
        }

        &:active {
          // border-color: var(--color-semantic-border-active-soft);
        }
      }

      @media (hover: none) {
        &:active {
          // border-color: var(--color-semantic-border-active-soft);
        }
      }
    }

    &_negative {
      // color: var(--color-semantic-content-normal-contrast-primary);
      // background-color: var(--color-semantic-background-normal-negative);

      &:deep(.icon) {
        // background-color: var(--color-semantic-content-normal-contrast-primary);
      }

      @media (hover: hover) {
        &:hover {
          // background-color: var(--color-semantic-background-hover-negative);
        }

        &:active {
          // background-color: var(--color-semantic-background-active-negative);
        }
      }

      @media (hover: none) {
        &:active {
          // background-color: var(--color-semantic-background-active-negative);
        }
      }
    }

    &_positive {
      // color: var(--color-semantic-content-normal-contrast-primary);
      // background: var(--color-semantic-background-normal-positive);

      &:deep(.icon) {
        // background-color: var(--color-semantic-content-normal-contrast-primary);
      }

      @media (hover: hover) {
        &:hover {
          // background-color: var(--color-semantic-background-hover-positive);
        }

        &:active {
          // background-color: var(--color-semantic-background-active-positive);
        }
      }

      @media (hover: none) {
        &:active {
          // background-color: var(--color-semantic-background-active-positive);
        }
      }
    }
  }

  &__size {
    &_l {
      gap: 8px;
      height: 56px;
      padding: 0 24px;

      // @include control-L;

      &:deep(.directive-loader) {
        width: 24px;
        height: 24px;
        background-size: 24px;
      }
    }

    &_m {
      gap: 6px;
      height: 48px;
      padding: 0 20px;

      // @include control-M;

      &:deep(.directive-loader) {
        width: 20px;
        height: 20px;
      }
    }

    &_s {
      gap: 4px;
      height: 40px;
      padding: 0 16px;

      // @include control-S;

      &:deep(.directive-loader) {
        width: 16px;
        height: 16px;
      }
    }

    &_xs {
      gap: 4px;
      height: 32px;
      padding: 0 12px;

      // @include control-S;

      &:deep(.icon) {
        width: 16px;
        height: 16px;
      }
    }
  }

  &:disabled {
    // color: var(--color-semantic-content-other-disable) !important;
    cursor: not-allowed !important;

    // background: var(--color-semantic-background-other-disable) !important;
    border: none !important;

    &:deep(.icon) {
      // background: var(--color-semantic-content-other-disable);
    }

    &:active {
      box-shadow: none !important;
    }
  }
}

@media (width <= 1023px) {
  .ui-button {
    &_size {
      &_l {
        height: 52px;
        padding: 0 24px;

        &:deep(.directive-loader) {
          width: 24px;
          height: 24px;
        }
      }

      &_m {
        height: 44px;
        padding: 0 20px;

        &:deep(.directive-loader) {
          width: 20px;
          height: 20px;
        }
      }

      &_s {
        height: 36px;
        padding: 0 16px;

        &:deep(.directive-loader) {
          width: 16px;
          height: 16px;
        }
      }

      &_xs {
        height: 28px;
        padding: 0 10px;

        .ui-button__icon {
          width: 12px;
          height: 12px;
        }
      }
    }
  }
}
</style>
