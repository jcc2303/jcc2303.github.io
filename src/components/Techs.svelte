<script lang="ts">
  export let works = []

  export let skillCounts = []

  $: skillCounts = countTechSkills(works)

  // type Skill = {
  //   skill: string;
  //   count: number;
  //   companies: string[];
  // }

  // type Work = {
  //   company: string;
  //   stack: string[];
  // }

  function countTechSkills(works) {
    const skills = []
    works.forEach((work) => {
      console.log(work.stack)
      work.stack.forEach((tech) => {
        const existingSkill = skills.find((skill) => skill.skill === tech)
        if (existingSkill) {
          existingSkill.count++
          existingSkill.companies.push(work.company)
        } else {
          skills.push({ skill: tech, count: 1, companies: [work.company] })
        }
      })
    })
    return skills.sort((a, b) => b.count - a.count)
  }

  let expandedSkill = null

  function toggleExpand(skill) {
    expandedSkill = expandedSkill === skill ? null : skill
  }

  function findCompany(company) {
    console.log(company)
  }
</script>

<div
  class="flex-wrap sm:flex justify-between m-3 p-6 bg-white border rounded-lg overflow-hidden"
>
  <ul class="flex flex-wrap">
    {#each skillCounts as { skill, count, companies }}
      <li class="py-2 px-3 cursor-pointer" on:click={() => toggleExpand(skill)}>
        <div class="flex items-center bg-gray-300 rounded-md p-2">
          <div class="mr-2">
            {skill}
          </div>
          {#if expandedSkill === skill}
            {#each companies as company}
              <div
                class="text-gray-500 bg-gray-50 rounded-sm px-1 mr-1"
                on:click={() => findCompany(company)}
              >
                {company}
              </div>
            {/each}
          {/if}
        </div>
      </li>
    {/each}
  </ul>
</div>

<!-- <span class="px-2">{JSON.stringify(techs)}</span> -->
