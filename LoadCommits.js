const username = "NatdanaiPuthom";
const repository = "chashack-starter";

const url = `https://api.github.com/repos/${username}/${repository}/commits`;

fetch(url)
    .then(response => response.json())
    .then(commits => {

        const timeline = document.getElementById("commit-timeline");

        timeline.innerHTML = "";

        commits.forEach(commit => {

            const item = document.createElement("div");
            item.classList.add("timeline-item");

            const date = new Date(commit.commit.author.date);

            item.innerHTML = `
                <h3>${commit.commit.message}</h3>

                <p>
                    ${date.toLocaleDateString("sv-SE")}
                    ${date.toLocaleTimeString("sv-SE")}
                </p>

                <p>
                    Commit:
                    <a href="${commit.html_url}" target="_blank">
                        ${commit.html_url}
                    </a>
                </p>
            `;

            timeline.appendChild(item);
        });
    })
    .catch(error => {
        console.error("Kunde inte hämta commits:", error);
    });