import jsPDF from 'jspdf'

// Function to add a new line and handle page breaks
function newLineY(doc, cursor, MARGIN, extra = 0) {
  let space = cursor.y + 10 + extra
  if (space + MARGIN > doc.internal.pageSize.height) {
    doc.addPage()
    cursor.y = MARGIN
  } else {
    cursor.y = space
  }
}

// Function to add a section title with a horizontal line
function addSectionTitle(doc, cursor, MARGIN, title) {
  doc.setFontType('italic').text(title, MARGIN, cursor.y)
  doc.line(20, cursor.y + 2, doc.internal.pageSize.width - MARGIN, cursor.y + 2)
  newLineY(doc, cursor, MARGIN, 10)
}

// Function to add a block of text
function addTextBlock(doc, cursor, MARGIN, text) {
  const lines = doc.splitTextToSize(
    text,
    doc.internal.pageSize.width - 2 * MARGIN
  )
  console.log(lines.length)
  doc.text(lines, MARGIN, cursor.y)
  newLineY(doc, cursor, MARGIN, lines.length * 4)
}

// Function to add a list of items
function addItemList(doc, cursor, MARGIN, items) {
  try {
    newLineY(doc, cursor, MARGIN)
    newLineY(doc, cursor, MARGIN)
    items.forEach((item) => {
      doc.setTextColor(10, 10, 10)
      doc.text(item, MARGIN + 20, cursor.y)
      newLineY(doc, cursor, MARGIN)
    })
  } catch (e) {
    console.log(e)
  }
}

function generateImageSection(doc, cursor, MARGIN, imagePath) {
  let image = new Image()
  image.src = imagePath

  image.onerror = function () {
    // Handle image loading error
    console.error('Error loading image')
  }

  image.onload = function () {
    // IMAGE
    doc.setFillColor(100, 100, 100)
    doc.rect(doc.internal.pageSize.width - MARGIN - 30, MARGIN + 2, 30, 30, 'F')
    doc.addImage(
      image,
      'JPEG',
      doc.internal.pageSize.width - MARGIN - 30 - 2,
      MARGIN,
      30,
      30,
      'monkey'
    )

    newLineY(doc, cursor, MARGIN)
  }
}

function generateBasicsSection(doc, cursor, MARGIN, basics) {
  const { name, label, email, phone, website, summary } = basics

  doc
    .setFontSize(22)
    .setTextColor(255, 0, 0)
    .setFont('times')
    .setFontType('italic')
    .text(
      name,
      doc.internal.pageSize.width - MARGIN - 30 - 10,
      cursor.y + 15,
      null,
      null,
      'right'
    )
  doc
    .setTextColor(10, 10, 10)
    .setFontSize(10)
    .text(
      label,
      doc.internal.pageSize.width - MARGIN - 30 - 10,
      cursor.y + 30,
      null,
      null,
      'right'
    )
  newLineY(doc, cursor, MARGIN)
  doc.text(email, MARGIN, cursor.y)
  newLineY(doc, cursor, MARGIN)
  doc.text(phone, MARGIN, cursor.y)
  newLineY(doc, cursor, MARGIN)
  doc.text(website, MARGIN, cursor.y)

  newLineY(doc, cursor, MARGIN)
  newLineY(doc, cursor, MARGIN)
  addSectionTitle(doc, cursor, MARGIN, 'About')
  addTextBlock(doc, cursor, MARGIN, summary)
}

function generateEducation(doc, cursor, MARGIN, education) {
  newLineY(doc, cursor, MARGIN)
  newLineY(doc, cursor, MARGIN)
  newLineY(doc, cursor, MARGIN)
  addSectionTitle(doc, cursor, MARGIN, 'Education')

  education.forEach((x) => {
    const { institution, area, startDate, endDate } = x
    doc
      .setFontSize(10)
      .setFont('times')
      .setFontType('bold')
      .text(institution + ' ' + area, MARGIN + 10, cursor.y + 5)
      .setFontType('italic')
      .text(
        `${startDate} - ${endDate}`,
        doc.internal.pageSize.width - MARGIN,
        cursor.y,
        null,
        null,
        'right'
      )

    newLineY(doc, cursor, MARGIN, 5)
  })
}

function generateView(doc, cursor, MARGIN, view) {
  if (view) {
    newLineY(doc, cursor, MARGIN, 10)
    doc
      .setFontSize(10)
      .setFont('times')
      .setFontType('bold')
      .text(view, MARGIN + 250, cursor.y)
    doc.line(
      20,
      cursor.y + 2,
      doc.internal.pageSize.width - MARGIN,
      cursor.y + 2
    )
    newLineY(doc, cursor, MARGIN)
  }
}

function generateSkills(doc, cursor, MARGIN, works, clients) {
  addSectionTitle(doc, cursor, MARGIN, 'Skills')

  // Extract skills from works
  const workSkills = works.flatMap((work) => work.stack)
  // Extract skills from clients
  const clientSkills = clients.flatMap((client) => client?.stack)
  // Combine all skills
  const allSkills = [...new Set([...workSkills, ...clientSkills])]

  // doc
  //   .setFontSize(10)
  //   .setFont('times')
  //   .setFontType('bold')
  //   .text('Technologies:', MARGIN + 10, cursor.y + 5)
  //   .setFontType('italic')
  //   .text(allSkills.join(', '), MARGIN + 105, cursor.y);
  addTextBlock(doc, cursor, MARGIN, allSkills.join(', '))

  newLineY(doc, cursor, MARGIN)
}

function generateExperience(doc, cursor, MARGIN, experience, title = '') {
  newLineY(doc, cursor, MARGIN)
  addSectionTitle(doc, cursor, MARGIN, title)

  experience.forEach((x) => {
    const {
      company,
      position,
      startDate,
      endDate = 'current',
      highlights,
      stack,
      summary,
    } = x

    doc
      .setTextColor(10, 10, 10)
      .setFontSize(10)
      .setFont('times')
      .setFontType('bold')
      .text(company, MARGIN, cursor.y)
    doc
      .setTextColor(175, 10, 10)
      .setFontType('italic')
      .text(position, MARGIN + 130, cursor.y)
    doc
      .setTextColor(10, 10, 10)
      .text(
        `${startDate} - ${endDate}`,
        doc.internal.pageSize.width - MARGIN,
        cursor.y,
        null,
        null,
        'right'
      )

    newLineY(doc, cursor, MARGIN)
    addTextBlock(doc, cursor, MARGIN + 5, summary)

    addItemList(doc, cursor, MARGIN, highlights)

    newLineY(doc, cursor, MARGIN)
    doc
      .setFontSize(9)
      .setTextColor(100, 100, 100)
      .setFont('times')
      .setFontType('bold')
    addTextBlock(doc, cursor, MARGIN + 5, stack.join(' | '))

    newLineY(doc, cursor, MARGIN)
  })
}

// part 2

function generatePDF(resume) {
  try {
    const { name, basics, education, works, clients } = resume
    const MARGIN = 20
    const doc = new jsPDF('p', 'pt', 'a4')

    const cursor = { y: MARGIN }

    generateImageSection(doc, cursor, MARGIN, '/images/me.jpg')
    generateBasicsSection(doc, cursor, MARGIN, basics)
    newLineY(doc, cursor, MARGIN)
    generateEducation(doc, cursor, MARGIN, education)
    newLineY(doc, cursor, MARGIN)
    generateView(doc, cursor, MARGIN, undefined)
    newLineY(doc, cursor, MARGIN)
    generateSkills(doc, cursor, MARGIN, works, clients)
    newLineY(doc, cursor, MARGIN)
    newLineY(doc, cursor, MARGIN)
    newLineY(doc, cursor, MARGIN)
    newLineY(doc, cursor, MARGIN)
    generateExperience(doc, cursor, MARGIN, clients, 'Clients')
    newLineY(doc, cursor, MARGIN)
    generateExperience(doc, cursor, MARGIN, works, 'Works')

    doc.save(`resume-${name}.pdf`)
  } catch (error) {
    console.error('Error generating PDF:', error)
  }
}

function generateCoverPDF(resume) {
  try {
    const { name, cover } = resume.basics
    const MARGIN = 40
    const doc = new jsPDF('p', 'pt', 'letter')

    const cursor = { y: MARGIN }

    // BASICS
    doc
      .setFontSize(12)
      .setFont('times')
      .setFontType('italic')
      .text(
        doc.splitTextToSize(cover, doc.internal.pageSize.width - 2 * MARGIN),
        MARGIN,
        cursor.y + 30
      )

    doc.save(`cover-${name}.pdf`)
  } catch (error) {
    console.error('Error generating cover PDF:', error)
  }
}

export { generatePDF, generateCoverPDF }
