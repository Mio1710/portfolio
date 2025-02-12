<template>
  <div class="position-relative">
    <div id="console" class="top-8 position-relative">
      <!-- Game Screen -->
      <div id="game-screen" ref="gameScreen">
        <v-img
          alt="Avatar"
          height="250"
          src="/images/i2.jpg"
          class="object-top object-cover h-full w-full"
          cover
        ></v-img>
      </div>
    </div>
    <div id="console" class="left-1/4 bottom-8 position-relative">
      <!-- Game Screen -->
      <div id="game-screen" ref="gameScreen">
        <!-- <v-avatar> -->
        <v-img
          alt="Avatar"
          src="/images/i1.jpg"
          height="250"
          class="h-full w-full"
          cover
          position="bottom"
        ></v-img>
        <!-- </v-avatar> -->
      </div>
    </div>
  </div>
</template>

<style>
#console {
  width: 40%;
  height: 50%;
  padding: 24px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    to bottom,
    rgba(35, 123, 109, 1),
    rgba(67, 217, 173, 0.13)
  );
  border-radius: 10px;
}

#game-screen {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(1, 22, 39, 0.84);
  box-shadow: inset 0 0 10px #00000071;
}

#console-menu {
  height: 400px;
}
</style>
