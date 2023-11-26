'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const AdminAboutDashboard = () => {
  const [abouts, setAbouts] = useState([]);
  const [editedAbout, setEditedAbout] = useState(null);

  useEffect(() => {
    async function fetchAbouts() {
      try {
        const response = await fetch('/api/about', {
          cache: 'no-store',
        });
        const data = await response.json();
        setAbouts(data.abouts);
      } catch (error) {
        console.error('Error fetching About data:', error);
      }
    }

    fetchAbouts();
  }, []);

  const handleEdit = (about) => {
    setEditedAbout({ ...about }); // Copying the about object to editedAbout for editing
  };

  const handleCancelEdit = () => {
    setEditedAbout(null);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await fetch('/api/about', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedAbout),
      });

      if (response.ok) {
        console.log('About data updated successfully');
        fetchAbouts();
        setEditedAbout(null);
      } else {
        console.error('Error updating about data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAbout((prevEditedAbout) => ({
      ...prevEditedAbout,
      [name]: value,
    }));
  };

  const handleSkillInputChange = (e, skillIndex, propertyName) => {
    const { value } = e.target;
    setEditedAbout((prevEditedAbout) => {
      const updatedSkills = prevEditedAbout.skills.map((skill, index) => {

        if (index === skillIndex) {
          console.log('updated:', editedAbout);
          return {
            ...skill,
            [propertyName]: value,
          };
        }
        return skill;
      });
      return {
        ...prevEditedAbout,
        skills: updatedSkills,
      };
    });
  };

  if (!abouts || abouts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {abouts.map((about) => (
        <div key={about._id} className="flex items-center justify-between">
          {/* Desktop navigation */}
          <div className="md:flex hidden z-10 max-w-6xl mx-auto w-full items-center justify-center font-mono text-sm py-6">
            <div>
            {editedAbout && editedAbout._id === about._id ? (
                <form onSubmit={handleSaveEdit}>
                  <label className='block py-6'>
                    <span>Your description</span>
                    <textarea
                      name="description"
                      value={editedAbout.description}
                      onChange={handleInputChange}
                      placeholder='Write description'
                      required
                      className='form_textarea'
                    />
                  </label>

                  <label className='block py-6'>
                    <span>Your Question</span>
                    <input
                      name="question"
                      value={editedAbout.question}
                      onChange={handleInputChange}
                      required
                      className='form_input'
                    />
                  </label>

                  <label className='block'>
                    <span>Question Description</span>
                    <input
                      name="questionDescription"
                      value={editedAbout.questionDescription}
                      onChange={handleInputChange}
                      required
                      className='form_question_description'
                    />
                  </label>

                  {about.skills.map((skill, index) => (
                    <div key={`${editedAbout._id}-${index}`} className='flex'>
                       <label className='block'>
                        <span>Skill Name </span>
                        <input
                          name={`skillname-${index}`}
                          value={editedAbout.skills[index].name}
                          onChange={(e) => handleSkillInputChange(e, index, 'name')}
                          required
                          className='form_question_description'
                        />
                      </label>

                      <label className='block'>
                        <span>Skill Percentage </span>
                        <input
                          name={`skillpercentage-${index}`}
                          value={editedAbout.skills[index].percentage}
                          onChange={(e) => handleSkillInputChange(e, index, 'percentage')}
                          required
                          className='form_question_description'
                        />
                      </label>
                    </div>
                  ))}


                  <div className='justify-between'>
                    <button
                      type='submit'
                      className='px-5 py-1.5 text-sm bg-black rounded-full text-white'
                    >Save</button>
                    <button
                      type='button'
                      onClick={handleCancelEdit}
                      className='px-5 py-1.5 text-sm bg-black rounded-full text-white'
                    >Cancel</button>
                  </div>
                </form>
              ) : (
                <div>
                  <div>Description: {about.description}</div>
                  <div>Question: {about.question}</div>
                  <div>Question Description: {about.questionDescription}</div>
                  {about.skills.map((skill) => (
                    <div className='flex'>
                      <div>{skill.name}: </div>
                      <div>{skill.percentage}</div>
                    </div>
                  ))}
                  <button
                    onClick={() => handleEdit(about)}
                    className='px-5 py-1.5 text-sm bg-black rounded-full text-white'
                  >Edit</button>
                   <button
                  className='px-5 py-1.5 text-sm
                  bg-black rounded-full text-white'
                  >
                    <Link href="/">
                    Back to home
                    </Link>
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AdminAboutDashboard;
