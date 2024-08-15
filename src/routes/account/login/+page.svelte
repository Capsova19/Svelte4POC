<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="flex items-center justify-center w-full h-[90%] ">
	<div class="box">
		<form
			method="POST"
			use:enhance={({}) => {
				return async ({ result }) => {
					// `result` is an `ActionResult` object
					if (result.status === 200) {
						goto('/account/profile');
					} else {
						await applyAction(result);
					}
				};
			}}
		>
			{#if form?.invalid === true || form?.error === true}
				<div class="w-full text-center">
					{#if form?.error === true}
						<div class="bg-red-200 text-red-800 p-4 rounded-md">
							<p>Error during login.</p>
						</div>
					{:else}
						<div class="bg-red-200 text-red-800 p-4 rounded-md">
							<p>Invalid username or password.</p>
						</div>
					{/if}
				</div>
			{/if}

			<div class="title">
				<h1>Login</h1>
			</div>

			<div class="input-box">
				<label for="text" class="label-color"> User</label>
				<input id="text" name="username" type="text" placeholder="Username" required />
				<br />
				<label for="password" class="label-color"> Password</label>
				<input id="password" name="password" type="password" placeholder="Password" required />
				<br />
				<input type="submit" class="Login" value="Login" />
				<br />
				<p class="link-text">Forget password ? <a href="/register">Click Here</a></p>
				<p class="link-text">
					Dont have an account ?
					<a href="/register">Click Here</a>
				</p>
			</div>
		</form>
	</div>
</div>

<style lang="postcss">
	.box {
		position: relative;
		width: 370px;
		height: 450px;
		background: #1c1c1c;
		border-radius: 50px 5px;
		overflow: hidden;
	}
	.box::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 370px;
		height: 450px;
		background: linear-gradient(60deg, transparent, #45f3ff, #45f3ff);
		transform-origin: bottom right;
		animation: animate 6s linear infinite;
	}

	.box::after {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 370px;
		height: 450px;
		background: linear-gradient(60deg, transparent, #d9138a, #d9138a);
		transform-origin: bottom right;
		animation: animate 6s linear infinite;
		animation-delay: -3s;
	}
	@keyframes animate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	form {
		position: absolute;
		inset: 2px;
		background: #28292d;
		border-radius: 50px 5px;
		z-index: 10;
		padding: 30px 30px;
		display: flex;
		flex-direction: column;
	}
	.title {
		width: 100%;
	}
	.title h1 {
		color: #45f3ff;
		justify-content: center;
		font-size: 2rem;
		font-weight: 600;
		opacity: 0.9;
		margin-bottom: 20px;
	}
	form .input-box {
		width: 100%;
		margin-top: 20px;
	}
	form .input-box input {
		width: 100%;
		background-color: rgba(255, 255, 255, 0.2);
		border: none;
		outline: none;
		border-width: 3px;
		border-radius: 15px;
		padding: 10px 20px;
		font-size: 1rem;
		margin: 10px 0px 10px 0px;
		color: white;
	}
	form .input-box input::placeholder {
		color: #cdd1d2;
	}
	form .input-box input[type='submit'] {
		background-color: #45f3ff;
		cursor: pointer;
		color: #16100e;
		filter: drop-shadow(0 5px 10px #45f3ff);
		margin-bottom: 20px;
	}

	form .link-text {
		padding-top: 15px;
		color: rgb(103, 173, 183);
		font-size: 0.7rem;
	}
	form .link-text a {
		text-decoration: none;
		color: rgb(153, 41, 99);
		font-weight: 700;
	}
	.label-color {
		color: #9eb3b5;
	}

	/*
  Based on TailwindCSS recommendations,
  consider using classes instead of the `@apply` directive
  @see https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction
*/
	/* * {
  @apply box-border m-0 p-0;
  font-family: "Poppins", sans-serif;
}
body {
  @apply flex justify-center items-center bg-[#23242a] h-screen;
}
.box {
  @apply relative w-[370px] h-[450px] overflow-hidden rounded-[50px_5px] before:content-[''] before:absolute before:w-[370px] before:h-[450px] before:origin-bottom-right before:animate-[animate_6s_linear_infinite] before:-left-2/4 before:-top-2/4 after:content-[''] after:absolute after:w-[370px] after:h-[450px] after:origin-bottom-right after:animate-[animate_6s_linear_infinite] after:-left-2/4 after:-top-2/4;
  background: #1c1c1c;
}
.box::before {
  background: linear-gradient(60deg, transparent, #45f3ff, #45f3ff);
}
.box::after {
  background: linear-gradient(60deg, transparent, #d9138a, #d9138a);
  animation-delay: -3s;
}
  	@keyframes animate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
form {
  @apply absolute z-10 flex flex-col p-[30px] rounded-[50px_5px] inset-0.5;
  background: #28292d;
}
.title {
  @apply w-full;
}
.title h1 {
  @apply text-[#45f3ff] justify-center text-[2rem] font-semibold opacity-90 mb-5;
}
form .input-box {
  @apply w-full mt-5;
}
form .input-box input {
  @apply w-full bg-[rgba(255,255,255,0.2)] text-base text-[white] mx-0 my-2.5 px-5 py-2.5 rounded-[15px] border-[none] border-[3px];
  outline: none;
}
form .input-box input::placeholder {
  @apply text-[#cdd1d2];
}
form .input-box input[type="submit"] {
  @apply bg-[#45f3ff] cursor-pointer text-[#16100e] mb-5;
  filter: drop-shadow(0 5px 10px #45f3ff);
}
form .link-text {
  @apply text-[rgb(103,173,183)] text-[0.85rem] pt-[15px];
}
form .link-text a {
  @apply no-underline text-[rgb(153,41,99)] font-bold;
}
.label-color {
  @apply text-[#9eb3b5];
} */
</style>
