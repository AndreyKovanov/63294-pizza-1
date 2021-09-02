<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        :value="pizzaName"
        @input="pizzaName = $event.target.value"
      />
    </label>

    <AppDrop @drop="addIngredient" class="content__constructor">
      <div
        class="pizza"
        :class="`pizza--foundation--${currentDough.value}-${currentSauce.value}`"
      >
        <div class="pizza__wrapper">
          <div
            v-for="ingredientItem in choosenIngredientList"
            :key="ingredientItem.id"
            class="pizza__filling"
            :class="`pizza__filling--${ingredientItem.value}${ingredientItem.countClass}`"
          ></div>
        </div>
      </div>
    </AppDrop>

    <div class="content__result">
      <p>Итого: {{ pizzaPrice }} ₽</p>
      <button
        type="button"
        class="button"
        :disabled="isSubmittDisabled"
        @click="startCooking"
      >
        Готовьте!
      </button>
    </div>
  </div>
</template>

<script>
import { getCountClass } from "@/common/helpers";
import AppDrop from "@/common/components/AppDrop";

export default {
  name: "BuilderPizzaView",
  components: {
    AppDrop,
  },
  props: {
    currentSauce: {
      type: Object,
      required: true,
    },
    currentSize: {
      type: Object,
      required: true,
    },
    currentDough: {
      type: Object,
      required: true,
    },
    currentIngredients: {
      type: Object,
      required: true,
    },
    ingredientList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return { pizzaName: "" };
  },
  computed: {
    choosenIngredientList() {
      return this.ingredientList
        .filter((ingredient) => this.currentIngredients[ingredient.value] > 0)
        .map((ingredient) => ({
          ...ingredient,
          countClass: getCountClass(this.currentIngredients[ingredient.value]),
          count: this.currentIngredients[ingredient.value],
        }));
    },
    pizzaPrice() {
      const ingredientSum = this.ingredientList.reduce(
        (sum, currentIngredient) =>
          sum +
          currentIngredient.price *
            this.currentIngredients[currentIngredient.value],
        0
      );

      return (
        (ingredientSum + this.currentDough.price + this.currentSauce.price) *
        this.currentSize.multiplier
      );
    },
    isSubmittDisabled() {
      return this.choosenIngredientList.length === 0 || !this.pizzaName;
    },
  },
  methods: {
    startCooking() {
      this.$emit("addPizza", {
        name: this.pizzaName,
        price: this.pizzaPrice,
        ingredients: this.choosenIngredientList,
        sauce: this.currentSauce,
        size: this.currentSize,
        dough: this.currentDough,
      });
    },
    addIngredient(ingredientName) {
      this.$emit("updateIngredients", {
        ...this.currentIngredients,
        [ingredientName]: this.currentIngredients[ingredientName] + 1,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.pizza {
  position: relative;

  display: block;

  box-sizing: border-box;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &--foundation--large-creamy {
    background-image: url("~@/assets/img/foundation/big-creamy.svg");
  }

  &--foundation--large-tomato {
    background-image: url("~@/assets/img/foundation/big-tomato.svg");
  }

  &--foundation--light-creamy {
    background-image: url("~@/assets/img/foundation/small-creamy.svg");
  }

  &--foundation--light-tomato {
    background-image: url("~@/assets/img/foundation/small-tomato.svg");
  }
}

.pizza__wrapper {
  width: 100%;
  padding-bottom: 100%;
}

.pizza__filling {
  position: absolute;
  top: 0;
  left: 0;

  display: block;

  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::before,
  &::after {
    display: none;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    content: "";

    background-image: inherit;
  }

  &--second {
    &::before {
      display: block;

      transform: rotate(45deg);
    }
  }

  &--third {
    &::before {
      display: block;

      transform: rotate(45deg);
    }

    &::after {
      display: block;

      transform: rotate(-45deg);
    }
  }

  &--ananas,
  &--ananas.pizza__filling--second::before,
  &--ananas.pizza__filling--third::after {
    background-image: url("~@/assets/img/filling-big/ananas.svg");
  }

  &--bacon,
  &--bacon.pizza__filling--second::before,
  &--bacon.pizza__filling--third::after {
    background-image: url("~@/assets/img/filling-big/bacon.svg");
  }

  &--blue_cheese,
  &--blue.pizza__filling--second::before,
  &--blue.pizza__filling--third::after {
    background-image: url("~@/assets/img/filling-big/blue_cheese.svg");
  }

  &--cheddar,
  &--cheddar.pizza__filling--second::before,
  &--cheddar.pizza__filling--third::after {
    background-image: url("~@/assets/img/filling-big/cheddar.svg");
  }

  &--chile,
  &--chile.pizza__filling--second::before,
  &--chile.pizza__filling--third::after {
    background-image: url("~@/assets/img/filling-big/chile.svg");
  }

  &--ham,
  &--ham.pizza__filling--second::before,
  &--ham.pizza__filling--third::after {
    background-image: url("~@/assets/img/filling-big/ham.svg");
  }

  &--jalapeno,
  &--jalapeno.pizza__filling--second::before,
  &--jalapeno.pizza__filling--third::after {
    background-image: url("~@/assets/img/filling-big/jalapeno.svg");
  }

  &--mozzarella,
  &--mozzarella.pizza__filling--second::before,
  &--mozzarella.pizza__filling--third::after {
    background-image: url("~@/assets/img/filling-big/mozzarella.svg");
  }

  &--mushrooms,
  &--mushrooms.pizza__filling--second::before,
  &--mushrooms.pizza__filling--third::after {
    background-image: url("~@/assets/img/filling-big/mushrooms.svg");
  }

  &--olives,
  &--olives.pizza__filling--second::before,
  &--olives.pizza__filling--third::after {
    background-image: url("~@/assets/img/filling-big/olives.svg");
  }

  &--onion,
  &--onion.pizza__filling--second::before,
  &--onion.pizza__filling--third::after {
    background-image: url("~@/assets/img/filling-big/onion.svg");
  }

  &--parmesan,
  &--parmesan.pizza__filling--second::before,
  &--parmesan.pizza__filling--third::after {
    background-image: url("~@/assets/img/filling-big/parmesan.svg");
  }

  &--salami,
  &--salami.pizza__filling--second::before,
  &--salami.pizza__filling--third::after {
    background-image: url("~@/assets/img/filling-big/salami.svg");
  }

  &--salmon,
  &--salmon.pizza__filling--second::before,
  &--salmon.pizza__filling--third::after {
    background-image: url("~@/assets/img/filling-big/salmon.svg");
  }

  &--tomatoes,
  &--tomatoes.pizza__filling--second::before,
  &--tomatoes.pizza__filling--third::after {
    background-image: url("~@/assets/img/filling-big/tomatoes.svg");
  }
}
</style>
