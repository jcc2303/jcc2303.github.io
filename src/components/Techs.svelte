<script lang="ts">
  import { searchQuery } from '../stores'

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
      // console.log(work.stack)
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

  const scrollToWorks = () => {
    const skillsSection = document.getElementById('Work')
    skillsSection.scrollIntoView({ behavior: 'smooth' })
  }

  function findCompany(company) {
    searchQuery.set(company)
    scrollToWorks()
  }
</script>

<div class="pl-1 py-3 mx-3 px-2 bg-white border rounded-lg overflow-hidden">
  <ul class="flex flex-wrap bg-white">
    {#each skillCounts as { skill, count, companies }}
      <li class="py-2 px-3 cursor-pointer" on:click={() => toggleExpand(skill)}>
        <div class="flex items-center bg-gray-300 rounded-md p-2">
          <div class="mr-2">
            {skill}
          </div>
          <div class="mr-2  text-blue-500">
            {count}
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
