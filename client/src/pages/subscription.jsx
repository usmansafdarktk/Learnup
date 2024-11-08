function subscription () {
  return (
    <div className="min-h-screen">
        <div class="mx-16 my-16">
        <div>
            <h2 class="text-3xl font-bold tracki text-center mt-12 sm:text-5xl ">Pricing</h2>
            <p class="max-w-3xl mx-auto mt-4 text-xl text-center ">Get started on our free plan and upgrade when you are
                ready.</p>
        </div>
        <div class="mt-24 container space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div class="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                <div class="flex-1">
                    <h3 class="text-xl font-semibold ">Free</h3>
                    <p class="mt-4 flex items-baseline ">
                        <span class="text-5xl font-extrabold tracking-tight">$0</span><span class="ml-1 text-xl font-semibold">/month</span>
                    </p>
                    <p class="mt-6 ">You just want to discover</p>
                    <ul role="list" class="mt-6 space-y-6">
                        <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg><span class="ml-3 ">Create a demo gig (10 Credits)</span></li>
                        <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg><span class="ml-3 ">Generate video (2 credits)</span></li>
                        <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg><span class="ml-3 ">Quizz (1 credits) </span></li>
                    </ul>
                </div><a
                    class="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                    href="/auth/login">Signup for free</a>
            </div>
            <div class="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                <div class="flex-1">
                    <h3 class="text-xl font-semibold ">Pro</h3>
                    <p
                        class="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
                        Most popular</p>
                    <p class="mt-4 flex items-baseline ">
                        <span class="text-5xl font-extrabold tracking-tight">$12</span><span class="ml-1 text-xl font-semibold">/month</span>
                    </p>
                    <p class="mt-6 ">You want to earn and grow as a seller</p>
                    <ul role="list" class="mt-6 space-y-6">
                        <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg><span class="ml-3 ">Create 7 gigs</span></li>
                        <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg><span class="ml-3 ">Sell ecommerce products</span></li>
                        <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg><span class="ml-3 ">Upload multi-media</span></li>
                        <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg><span class="ml-3 ">Earn </span></li>
                        <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg><span class="ml-3 ">Pay monthly</span></li>
                    </ul>
                </div><a
                    class="bg-emerald-500 text-white  hover:bg-emerald-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                    href="/auth/login">Signup for free</a>
            </div>
        </div>
    </div>
    </div>
  )
}


export default subscription;