<script lang="ts">
  import {
    UDLBasicAuth,
    updateUDLBasicAuth,
    UDLLoggedIn,
  } from "@/stores/user.store";
  import { content, lastcontent } from "@/stores/modal.store";
  import CloseButton from "@/lib/elements/CloseButton.svelte";
  import { writable, get } from "svelte/store";
  import { onMount } from "svelte";

  const error = writable("");
  const success = writable("");

  const username = writable("");
  const password = writable("");

  const closeModal = () => {
    $content = $lastcontent || undefined;
  };

  onMount(() => {
    console.log($UDLBasicAuth);
  });
  const login = (e: Event) => {
    console.log(get(username), get(password));
    e.preventDefault();
    try {
      updateUDLBasicAuth({
        username: get(username),
        password: get(password),
      });
      success.set("Logged in successfully.");
      error.set("");
    } catch (e) {
      error.set("Error logging in.");
      success.set("");
    }
  };

  const logout = () => {
    updateUDLBasicAuth({ username: "", password: "" });
    success.set("Logged out successfully.");
  };
</script>

<div
  class="fixed mt-12 pr-2 pl-2 flex justify-end items-start w-full md:w-[38%] h-[50%] md:h-[50%] max-h-[300px] max-w-[400px] right-0">
  <div class="flex justify-center items-center z-50 w-full h-full">
    <div
      style="background:rgba(48, 51, 54, .9)"
      class="bg-opacity-75 text-white rounded shadow-xl w-full h-full overflow-auto flex flex-col border border-gray-600">
      <div
        class="flex-none text-xs md:text-sm flex justify-between items-center pl-2 pr-3 pt-2 pb-2 md:pt-2 md:pb-2 border-b border-gray-600">
        <div class="flex items-center gap-2 w-full justify-between p-1">
          <div class="font-[300] flex gap-1">
            USER <p class="text-[.7rem]"></p>
          </div>
        </div>
        <CloseButton onclick={closeModal} />
      </div>

      <div class="flex-grow p-2 overflow-auto">
        {#if !$UDLLoggedIn}
          <!-- Login Form -->
          <form class="w-full max-w-md mx-auto" on:submit={login}>
            <div class="mb-4">
              <label
                for="username"
                class="block text-white text-xs font-bold mb-2"
                >UDL Username</label>
              <input
                required
                type="text"
                minlength="5"
                id="username"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                bind:value={$username} />
            </div>
            <div class="mb-4">
              <label
                for="password"
                class="block text-white text-xs font-bold mb-2"
                >UDL Password</label>
              <input
                required
                minlength="5"
                type="password"
                id="password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                bind:value={$password} />
            </div>
            <div class="flex items-center justify-between">
              <button
                type="submit"
                class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >Login</button>
              <span class="text-red-500 text-xs"
                >{#if $error}{$error}{/if}</span>
              <span class="text-green-500 text-xs"
                >{#if $success}{$success}{/if}</span>
            </div>
          </form>
        {:else}
          <!-- Display username and Logout button -->
          <div
            class="text-center flex flex-col h-full gap-5 items-center justify-center">
            <p class="text-white">Logged in as: {$UDLBasicAuth.username}</p>
            <button
              type="button"
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              on:click={logout}>Logout</button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes glowFadeOut {
    0% {
      background-color: rgba(255, 181, 44, 0.74);
    }
    100% {
      background-color: transparent;
    }
  }
</style>
