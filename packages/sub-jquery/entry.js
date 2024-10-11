const render = $ => {
    $('#purehtml-container').html('')
    // Set verbose flag
    $.hashroute({
        verbose: true,
    });

    /*
     * Set example middlewares (always run before routes are handled)
     */
    $.hashroute("middleware", function (e) {
        console.log("First middleware - Setting e.first"); // Just for giggles
        e.first = true;
        this.next(); // Advance in the middleware stack
    });
    $.hashroute("middleware", function (e) {
        console.log("Middleware - Setting pages to display: none");
        $(".page").hide();
        this.next(); // Advance in the middleware stack
    });

    /*
     * Set routes
     */
    $(document).hashroute("/", function (e) {
        $("#userList").show();
        $.getJSON(
            "https://jsonplaceholder.typicode.com/users",
            function (data) {
                console.log("Data:", data);
                var users = data.map(
                        (user) =>
                        `  <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
            <td
              class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
            ${user.id}
            </td>
            <td
              class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400"
            >
              <div class="text-base font-semibold text-gray-900 dark:text-white">
             <a href="#/user/${user.id}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">${user.name}</a>
              </div>
            </td>
            <td
              class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400"
            >  ${user.name}
            </td>
            <td
              class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >  ${user.email}
            </td>
            <td
              class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
            > ${user.phone}
            </td>
          </tr>`
                    ),
                    text = `
           ${users.join("")}`;
                $(".userList").html(text);
            }
        );
    });
    $(document).hashroute("/about", function (e) {
        console.log("--> userDetail!", e);
        $("#about").show();
    });
    $(document).hashroute("/user/:id/", function (e) {
        $("#userDetail").show().find(".id").show().find("span").html(e.params.id);
        $.getJSON(
            "https://jsonplaceholder.typicode.com/users/" + e.params.id,
            function (data) {
                console.log("Data:", data);
                const sss = Object.entries(data).map(([k, v]) =>  `  <tr>
        <td class='p-2'> ${k}</td>
        <td class='p-2 text-gray-900 whitespace-nowrap dark:text-white'>${v}</td>
      </tr>`);   
                var resources = JSON.stringify(sss);
                $(".userDetail").html(resources);
            }
        );
    });
    return Promise.resolve()
}

(global => {
    global['purehtml'] = {
        bootstrap: () => {
            console.log('purehtml bootstrap')
            return Promise.resolve()
        },
        mount: () => {
            console.log('purehtml mount')
            return render($)
        },
        unmount: () => {
            console.log('purehtml unmount')
            return Promise.resolve()
        },
    }
})(window)