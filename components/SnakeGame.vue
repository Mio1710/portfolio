<template>
  <div id="console">
    <!-- Game Screen -->
    <div id="game-screen" ref="gameScreen" class="position-relative">
      
      <img
        alt="Avatar"
        src="/images/i3.jpg"
        class="object-top first-image object-cover w-[60%] h-[60%] position-absolute right-0 bottom-0"
      ></img>
      <!-- <v-avatar> -->
      <img
        alt="Avatar"
        src="/images/i1.jpg"
        class="object-bottom first-image object-cover w-[70%] h-[70%] position-relative"
      ></img>
      <!-- </v-avatar> -->
    </div>
  </div>
</template>

<style>
#console {
  width: 420px;
  height: 370px;
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
  position: relative;
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

.first-image img {
  width: 70%;
  height: 70%;
  object-position: bottom;
}
</style>
